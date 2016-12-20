const FeedContainer = require('routes/Feed/FeedContainer').default
const matchRoute = require('./matchRoute')
const sendHtmlString = require('./sendHtmlString')

const renderFeed = (req, res) => {
  matchRoute(req, res, (renderProps) => {
    FeedContainer.fetchData().then((data) => {
      const bootData = {
        apods: data.apods,
        apodsNextDate: data.meta.nextDate,
      }

      sendHtmlString(res, renderProps, bootData)
    })
  })
}

module.exports = renderFeed
