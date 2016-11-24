const express = require('express')
const fs = require('fs');

const apiRouter = express.Router()

const fetchApods = (callback) => {
  fs.readFile('server/data/apods.json', 'utf8', (err, data) => {
    if (err) throw err
    console.log('apods.json loaded')

    callback(
      JSON.parse(data)
    )
  })
}

apiRouter.get('/apods', (req, res) => {
  fetchApods((json) => res.json(json))
})

module.exports = apiRouter
