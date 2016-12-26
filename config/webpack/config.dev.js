const webpack = require('webpack')
const config = require('./config')

const jsxLoader = config.module.loaders.filter(loader =>
  loader.key === 'jsx',
)[0]

jsxLoader.loaders.push('eslint-loader')

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      PORT: JSON.stringify(process.env.PORT),
    },
  }),
)

if (process.env.ANALYZE) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // eslint-disable-line

  config.plugins.push(
    new BundleAnalyzerPlugin(),
  )
}

module.exports = config
