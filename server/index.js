const express = require('express')
const morgan = require('morgan')

const apiRouter = require('./api')

const PORT = 3000;
const app = express()

app.use(morgan('dev'))
app.use('/api', apiRouter)

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) { console.log(err) }
  console.info('==> 🌎  Listening on port %s.', PORT)
})
