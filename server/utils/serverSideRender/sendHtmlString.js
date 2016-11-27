const React = require('react')
const renderToString = require('react-dom/server').renderToString
const { RouterContext } = require('react-router')
const styleSheet = require('styled-components/lib/models/StyleSheet')

const renderHtml = require('./renderHtml')
const globalStyle = require('styles/global').default

const getStyles = () => {
  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
  const concatedStyles = globalStyle.concat(' ', styles)

  if (process.env.NODE_ENV === 'production') {
    return concatedStyles.replace(/\s/g, '')
  }

  return concatedStyles
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
