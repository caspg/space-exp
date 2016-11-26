const app = require('./config')
const apiRouter = require('./api')

const serverSideRender = require('./serverSideRender')

const PORT = 3000;

app.use('/api', apiRouter)

app.use((req, res) => {
  serverSideRender(req, res)
})

/* eslint-disable no-console */
app.listen(PORT, '0.0.0.0', (err) => {
  if (err) { console.log(err) }
  console.info('==> 🌎  Listening on port %s.', PORT)
})
