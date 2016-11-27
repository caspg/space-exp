const React = require('react')
const renderToString = require('react-dom/server').renderToString
const { RouterContext } = require('react-router')
const styleSheet = require('styled-components/lib/models/StyleSheet')

const FeedContainer = require('routes/Feed/containers/FeedContainer').default
const serverSideRender = require('./serverSideRender')
const renderHtml = require('../renderHtml')

const handleFeedRender = (req, res, renderProps) => {
  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')

  FeedContainer.fetchData().then((data) => {
    const handleCreateElement = (Component, props) =>
      React.createElement(Component, { ...props, data })

    const content = renderToString(
      React.createElement(
        RouterContext,
        { ...renderProps, createElement: handleCreateElement },
      ),
    )

    const bootData = JSON.stringify(data)

    res.send(renderHtml({ content, styles, bootData }))
  })
}

const renderFeed = (req, res) => {
  serverSideRender(req, res, handleFeedRender)
}

module.exports = renderFeed
