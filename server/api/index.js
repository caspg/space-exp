const express = require('express')
const fs = require('fs')
const moment = require('moment')

const Apod = require('../db/schema/apod')

const apiRouter = express.Router()

const fetchApods = (callback) => {
  fs.readFile('server/data/apods.json', 'utf8', (err, data) => {
    if (err) throw err

    callback(JSON.parse(data))
  })
}

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
    .catch(() => {
      res.status(500).json({ message: 'some server error' })
    })
})

apiRouter.get('/apods/:slug', (req, res) => {
  const { slug } = req.params
  fetchApods((json) => {
    const apod = json.filter(i => i.slug === slug)[0]

    if (apod) {
      res.json(apod)
    } else {
      res.status(404).json({})
    }
  })
})

module.exports = apiRouter
