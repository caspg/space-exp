const React = require('react')
const reactRouter = require('react-router')
const renderToString = require('react-dom/server').renderToString
const styleSheet = require('styled-components/lib/models/StyleSheet')

const routes = require('../../src/routes').default
const renderHtml = require('./renderHtml')
const AppContainer = require('../../src/containers/AppContainer').default

const { match, RouterContext } = reactRouter

const renderRoute = (res, renderProps) => {
  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')

  AppContainer.fetchData().then((apods) => {
    const handleCreateElement = (Component, props) => (
       React.createElement(Component, { ...props, apods })
     )
    const stringApods = JSON.stringify(apods)
    const content = renderToString(
      React.createElement(
        RouterContext,
        { ...renderProps, createElement: handleCreateElement },
      ),
    )

    res.send(renderHtml({ content, styles, apods: stringApods }))
  })
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
