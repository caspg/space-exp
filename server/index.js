require('babel-register')

const app = require('./config')
const apiRouter = require('./api')
const renderFeed = require('./utils/serverSideRender/feed')
const renderApodDetails = require('./utils/serverSideRender/apodDetails')
const renderAbout = require('./utils/serverSideRender/about')
const db = require('./db')

const PORT = process.env.PORT || 4000

app.use('/api', apiRouter)

app.get('/', (req, res) => {
  renderFeed(req, res)
})

app.get('/about', (req, res) => {
  renderAbout(req, res)
})

app.get('/:slug', (req, res) => {
  renderApodDetails(req, res)
})

/* eslint-disable no-console */
app.listen(PORT, '0.0.0.0', (err) => {
  if (err) { console.log(err) }
  db.initialize()
  console.info('==> 🌎  Listening on port %s.', PORT)
})
