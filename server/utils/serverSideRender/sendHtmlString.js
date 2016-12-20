const React = require('react')
const renderToString = require('react-dom/server').renderToString
const { RouterContext } = require('react-router')

const renderHtml = require('./html/render')
const makeStyles = require('./makeStyles')

const sendHtmlString = (res, renderProps, data, meta) => {
  const handleCreateElement = (Component, props) =>
    React.createElement(Component, { ...props, data })

  const content = renderToString(
    React.createElement(
      RouterContext,
      { ...renderProps, createElement: handleCreateElement },
    ),
  )

  const bootData = JSON.stringify(data)

  res.send(renderHtml({ content, styles: makeStyles(), bootData, meta }))
}

module.exports = sendHtmlString
