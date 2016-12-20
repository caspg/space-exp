const ApodDetailsContainer = require('routes/ApodDetails/ApodDetailsContainer').default
const matchRoute = require('./matchRoute')
const sendHtmlString = require('./sendHtmlString')

const meta = ({ title, explanation, url }) => ({
  title: `Space Experience - APOD - ${title}`,
  description: explanation,
  image: url,
})

const renderApodDetails = (req, res) => {
  matchRoute(req, res, (renderProps) => {
    const { slug } = req.params
    ApodDetailsContainer.fetchData(slug)
      .then((data) => {
        sendHtmlString(res, renderProps, { apodDetails: data }, meta(data))
      }).catch(() => {
        res.status(404).send('Not found, yo!')
      })
  })
}

module.exports = renderApodDetails
