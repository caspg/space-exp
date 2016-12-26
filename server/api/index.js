const express = require('express')
const cors = require('cors')

const { findCollection, findBySlug } = require('./apods')

const apiRouter = express.Router()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

apiRouter.get('/apods', cors(corsOptions), (req, res) => {
  findCollection(req, res)
})

apiRouter.get('/apods/:slug', cors(corsOptions), (req, res) => {
  findBySlug(req, res)
})

module.exports = apiRouter
