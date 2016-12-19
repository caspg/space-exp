const express = require('express')

const Apod = require('../db/schema/apod')
const findCollection = require('./apods/findCollection')

const apiRouter = express.Router()

const serverErrorHandler = res =>
  res.status(500).json({ message: 'There was some server error.' })

apiRouter.get('/apods', (req, res) => {
  findCollection(req, res)
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
