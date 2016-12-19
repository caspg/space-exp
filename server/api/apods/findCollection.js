const moment = require('moment')

const Apod = require('../../db/schema/apod')
const { handleError } = require('./base')

const PER_PAGE = 10

const findApods = query =>
  Apod
    .find(query, '-_id -__v')
    .sort({ date: -1 })
    .limit(PER_PAGE + 1)

const findCollection = (req, res) => {
  const queryDate = req.query.date || moment().format('YYYY-MM-DD')
  const query = { date: { $lte: queryDate } }

  const handleSuccess = (apods) => {
    const lastItem = apods.splice(PER_PAGE, 1)[0]
    const nextDate = lastItem ? lastItem.date : null

    res.json({
      meta: {
        nextDate,
        currentSize: apods.length,
      },
      apods,
    })
  }

  findApods(query)
    .then(handleSuccess)
    .catch(() => handleError(res))
}

module.exports = findCollection
