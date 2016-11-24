const path = require('path')

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, '../../src/index.jsx'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../../public/bundles'),
    filename: '[name].bundle.js',
    publicPath: '/bundles/',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    root: path.resolve(__dirname, '../../src'),
    extensions: ['', '.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, '../../node_modules', 'react'),
    },
  },
}
