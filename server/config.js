const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.set('views', './server/views')
app.set('view engine', 'ejs')


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

module.exports = app
