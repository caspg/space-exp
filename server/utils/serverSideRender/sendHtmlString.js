const React = require('react')
const renderToString = require('react-dom/server').renderToString
const { RouterContext } = require('react-router')

const renderHtml = require('./renderHtml')
const makeStyles = require('./makeStyles')

const sendHtmlString = (res, renderProps, data) => {
  const handleCreateElement = (Component, props) =>
    React.createElement(Component, { ...props, data })

  const content = renderToString(
    React.createElement(
      RouterContext,
      { ...renderProps, createElement: handleCreateElement },
    ),
  )

  const bootData = JSON.stringify(data)

  res.send(renderHtml({ content, styles: makeStyles(), bootData }))
}

module.exports = sendHtmlString
