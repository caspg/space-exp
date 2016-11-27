const ApodDetailsContainer = require('routes/ApodDetails/containers/ApodDetailsContainer').default
const matchRoute = require('./matchRoute')
const sendHtmlString = require('./sendHtmlString')

const renderApodDetails = (req, res) => {
  matchRoute(req, res, (renderProps) => {
    const { slug } = req.params
    ApodDetailsContainer.fetchData(slug).then((data) => {
      sendHtmlString(res, renderProps, data)
    })
  })
}

module.exports = renderApodDetails
