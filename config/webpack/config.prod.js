const webpack = require('webpack')
const config = require('./config')

/* eslint-disable comma-dangle */
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      PORT: JSON.stringify(process.env.PORT),
      HOST: JSON.stringify('http://spaceexperience.club'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    },
    mangle: {
      screw_ie8: true
    },
    output: {
      comments: false,
      screw_ie8: true
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin()
)

config.node = {
  fs: 'empty',
  net: 'empty',
  tls: 'empty'
}

module.exports = config
