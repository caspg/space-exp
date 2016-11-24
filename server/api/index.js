const express = require('express')
const fs = require('fs');

const apiRouter = express.Router()

const fetchApods = () => {
  const apodsJson = fs.readFileSync('server/data/apods.json', (err) => {
    if (err) throw err
    console.log('apods.json loaded')
  })

  return JSON.parse(apodsJson)
}

apiRouter.get('/apods', (req, res) => {
  res.json(
    fetchApods()
  )
})

module.exports = apiRouter
