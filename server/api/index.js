const express = require('express')
const moment = require('moment')

const Apod = require('../db/schema/apod')

const apiRouter = express.Router()

const serverErrorHandler = res =>
  res.status(500).json({ message: 'There was some server error.' })

apiRouter.get('/apods', (req, res) => {
  const queryDate = req.query.date || moment().format('YYYY-MM-DD')
  const query = { date: { $lte: queryDate } }
  const perPage = 10

  Apod
    .find(query, '-_id -__v')
    .sort({ date: -1 })
    .limit(perPage + 1)
    .then((apods) => {
      const lastItem = apods.splice(perPage, 1)[0]
      const nextDate = lastItem ? lastItem.date : null

      res.json({
        meta: {
          nextDate,
          currentSize: apods.length,
        },
        apods,
      })
    })
    .catch(() => { serverErrorHandler(res) })
})

apiRouter.get('/apods/:slug', (req, res) => {
  const { slug } = req.params

  Apod
    .findOne({ slug }, '-_id -__v')
    .then((apod) => {
      if (apod) {
        res.json(apod)
      } else {
        res.status(404).json({ message: 'Apod not found.' })
      }
    })
    .catch(() => { serverErrorHandler(res) })
})

module.exports = apiRouter
