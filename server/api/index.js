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
  fetchApods(json => res.json(json))
})

apiRouter.get('/apods/:slug', (req, res) => {
  const { slug } = req.params
  fetchApods((json) => {
    const apod = json.filter(i => i.slug === slug)[0]
    res.json(apod)
  })
})

module.exports = apiRouter
