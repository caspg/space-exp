const React = require('react')
const renderToString = require('react-dom/server').renderToString
const { RouterContext } = require('react-router')
const styleSheet = require('styled-components/lib/models/StyleSheet')

const renderHtml = require('./renderHtml')
const globalStyle = require('styles/global').default

const getStyles = () => {
  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
  return globalStyle.concat(' ', styles)
}

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

  res.send(renderHtml({ content, styles: getStyles(), bootData }))
}

module.exports = sendHtmlString
