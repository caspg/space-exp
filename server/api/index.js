const express = require('express')

const { findCollection, findBySlug } = require('./apods')

const apiRouter = express.Router()

apiRouter.get('/apods', (req, res) => {
  findCollection(req, res)
})

apiRouter.get('/apods/:slug', (req, res) => {
  findBySlug(req, res)
})

module.exports = apiRouter
