const express = require('express')
const morgan = require('morgan')
const fs = require('fs');

const PORT = 3000;

const app = express()

app.use(morgan('dev'))

app.get('/api/apods', (req, res) => {
  const apodsJson = fs.readFileSync('server/data/apods.json', (err) => {
    if (err) throw err
    console.log('apods.json loaded')
  })
  res.json(
    JSON.parse(apodsJson)
  )
})

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) { console.log(err) }
  console.info('==> 🌎  Listening on port %s.', PORT)
})
