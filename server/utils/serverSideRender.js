const React = require('react')
const reactRouter = require('react-router')
const renderToString = require('react-dom/server').renderToString
const styleSheet = require('styled-components/lib/models/StyleSheet')

const routes = require('../../src/routes').default
const renderHtml = require('./renderHtml')

const { match, RouterContext } = reactRouter

const getFetchDataFunc = renderProps =>
  renderProps.routes.reduce((result, { component }) => (
    (component.fetchData) ? component.fetchData : result
  ), null)

const renderRoute = (res, renderProps) => {
  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
  const fetchData = getFetchDataFunc(renderProps)

  if (fetchData) {
    fetchData().then((data) => {
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
  } else {
    const content = renderToString(RouterContext, { ...renderProps })
    res.send(renderHtml({ content, styles, bootData: null }))
  }
}

const serverSideRender = (req, res) => (
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      renderRoute(res, renderProps)
    } else {
      res.status(404).send('Not found!')
    }
  })
)

module.exports = serverSideRender
