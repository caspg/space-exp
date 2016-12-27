const FeedContainer = require('routes/Feed/FeedContainer').default
const matchRoute = require('./matchRoute')
const sendHtmlString = require('./sendHtmlString')

const renderFeed = (req, res) => {
  const queryDate = req.query.date
  const perPage = 5

  matchRoute(req, res, (renderProps) => {
    FeedContainer.fetchData(queryDate, perPage).then((data) => {
      const bootData = {
        apods: data.apods,
        apodsNextDate: data.meta.nextDate,
      }

      sendHtmlString(res, renderProps, bootData)
    })
  })
}

module.exports = renderFeed
