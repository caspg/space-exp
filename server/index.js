const express = require('express')
const morgan = require('morgan')

const apiRouter = require('./api')

const PORT = 3000;
const app = express()

app.use(morgan('dev'))
app.use('/api', apiRouter)

if (process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackConfig = require('../config/webpack/config.js')
  const webpack = require('webpack')
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: '/bundles/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }))
}

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) { console.log(err) }
  console.info('==> 🌎  Listening on port %s.', PORT)
})
