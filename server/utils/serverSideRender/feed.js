const FeedContainer = require('routes/Feed/FeedContainer').default
const matchRoute = require('./matchRoute')
const sendHtmlString = require('./sendHtmlString')

const renderFeed = (req, res) => {
  matchRoute(req, res, (renderProps) => {
    FeedContainer.fetchData().then((data) => {
      sendHtmlString(res, renderProps, { apods: data })
    })
  })
}

module.exports = renderFeed
