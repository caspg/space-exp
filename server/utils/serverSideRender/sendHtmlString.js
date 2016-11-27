const React = require('react')
const renderToString = require('react-dom/server').renderToString
const { RouterContext } = require('react-router')
const styleSheet = require('styled-components/lib/models/StyleSheet')

const renderHtml = require('./renderHtml')

const sendHtmlString = (res, renderProps, data) => {
  const handleCreateElement = (Component, props) =>
    React.createElement(Component, { ...props, data })

  const content = renderToString(
    React.createElement(
      RouterContext,
      { ...renderProps, createElement: handleCreateElement },
    ),
  )

  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')

  res.send(renderHtml({ content, styles, bootData: data }))
}

module.exports = sendHtmlString
