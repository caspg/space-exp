require('babel-register')

const createElement = require('react').createElement
const reactRouter = require('react-router')
const renderToString = require('react-dom/server').renderToString
const styleSheet = require('styled-components/lib/models/StyleSheet')

const routes = require('../../src/routes').default
const renderHtml = require('./renderHtml')

const { match, RouterContext } = reactRouter

const renderRoute = (res, renderProps) => {
  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
  const content = renderToString(
    createElement(RouterContext, renderProps) // eslint-disable-line comma-dangle
  )


  res.send(renderHtml({ content, styles }))
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
