const webpack = require('webpack')
const config = require('./config')

const jsxLoader = config.module.loaders.filter(loader =>
  loader.key === 'jsx',
)[0]

jsxLoader.loaders.push('eslint-loader')

if (process.env.ANALYZE) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // eslint-disable-line

  config.plugins.push(
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        PORT: JSON.stringify(process.env.PORT),
      },
    }),
  )
}

module.exports = config
