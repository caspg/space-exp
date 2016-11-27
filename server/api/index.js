const express = require('express')
const fs = require('fs');

const apiRouter = express.Router()

const fetchApods = (callback) => {
  fs.readFile('server/data/apods.json', 'utf8', (err, data) => {
    if (err) throw err
    console.log('apods.json loaded')

    callback(
      JSON.parse(data),
    )
  })
}

apiRouter.get('/apods', (req, res) => {
  fetchApods(json => res.json(json.slice(0, 10)))
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
