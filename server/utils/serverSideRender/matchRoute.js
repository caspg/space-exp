const { match } = require('react-router')

const routes = require('../../../src/routes').default

const matchRoute = (req, res, renderRoute) => (
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      renderRoute(renderProps)
    } else {
      res.status(404).send('Not found!')
    }
  })
)

module.exports = matchRoute
