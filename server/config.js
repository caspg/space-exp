const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

const publicPath = path.resolve(__dirname, '../public')

app.use(morgan('dev'))
app.set('views', './server/views')
app.set('view engine', 'ejs')
app.use(express.static(publicPath));

if (process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackConfig = require('../config/webpack/config.dev.js')
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
