const moment = require('moment')

const Apod = require('../../db/schema/apod')
const { handleError } = require('./base')

const PER_PAGE = 10

const findApods = (query, perPage) =>
  Apod
    .find(query, '-_id -__v')
    .sort({ date: -1 })
    .limit(perPage + 1)

const findCollection = (req, res) => {
  const queryDate = req.query.date || moment().format('YYYY-MM-DD')
  const perPage = Number(req.query.perPage) || PER_PAGE
  const query = { date: { $lte: queryDate } }

  const handleSuccess = (apods) => {
    const lastItem = apods.splice(perPage, 1)[0]
    const nextDate = lastItem ? lastItem.date : null

    res.json({
      meta: {
        nextDate,
        currentSize: apods.length,
      },
      apods,
    })
  }

  findApods(query, perPage)
    .then(handleSuccess)
    .catch(() => handleError(res))
}

module.exports = findCollection
