const React = require('react')
const renderToString = require('react-dom/server').renderToString
const { RouterContext } = require('react-router')

const matchRoute = require('./matchRoute')
const renderHtml = require('./html/render')
const makeStyles = require('./makeStyles')

const renderAbout = (req, res) => {
  matchRoute(req, res, (renderProps) => {
    const content = renderToString(
      React.createElement(RouterContext, renderProps),
    )

    res.send(renderHtml({ content, styles: makeStyles() }))
  })
}

module.exports = renderAbout
