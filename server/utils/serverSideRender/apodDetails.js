const ApodDetailsContainer = require('routes/ApodDetails/containers/ApodDetailsContainer').default
const matchRoute = require('./matchRoute')
const sendHtmlString = require('./sendHtmlString')

const renderApodDetails = (req, res) => {
  matchRoute(req, res, (renderProps) => {
    const { slug } = req.params
    ApodDetailsContainer.fetchData(slug).then((data) => {
      if (data.status === 200) {
        sendHtmlString(res, renderProps, { apodDetails: data })
      } else {
        res.status(404).send('Not Found')
      }
    })
  })
}

module.exports = renderApodDetails
