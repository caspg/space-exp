require('babel-register')

const app = require('./config')
const apiRouter = require('./api')
const renderFeed = require('./utils/serverSideRender/feed')
const renderApodDetails = require('./utils/serverSideRender/apodDetails')

const PORT = 3000;

app.use('/api', apiRouter)

app.get('/', (req, res) => {
  renderFeed(req, res)
})

app.get('/:slug', (req, res) => {
  renderApodDetails(req, res)
})

// app.get('*', (req, res) => {
// as a fallback we should match route and send shell app
  // res.send(renderHtml({}))
// })

/* eslint-disable no-console */
app.listen(PORT, '0.0.0.0', (err) => {
  if (err) { console.log(err) }
  console.info('==> 🌎  Listening on port %s.', PORT)
})
