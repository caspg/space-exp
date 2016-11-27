const config = require('./config')

const jsxLoader = config.module.loaders.filter(loader =>
  loader.key === 'jsx',
)[0]

jsxLoader.loaders.push('eslint-loader')

module.exports = config
