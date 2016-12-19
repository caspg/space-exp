const Apod = require('../../db/schema/apod')
const { handleError } = require('./base')

const findOneApod = slug =>
  Apod.findOne({ slug }, '-_id -__v')

const findBySlug = (req, res) => {
  const { slug } = req.params

  const handleSuccess = (apod) => {
    if (apod) {
      res.json(apod)
    } else {
      res.status(404).json({ message: 'Apod not found.' })
    }
  }

  findOneApod(slug)
    .then(handleSuccess)
    .catch(() => handleError(res))
}

module.exports = findBySlug
