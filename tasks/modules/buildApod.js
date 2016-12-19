const fetchApod = require('./fetchApod')
const handleImage = require('./handleImage')
const slugify = require('./slugify')
const Apod = require('../../server/db/schema/apod')

const mergeData = (...args) => Object.assign({}, ...args)

const mergeSlug = (apodData) => {
  const slug = `${apodData.date}-${slugify(apodData.title)}`
  return mergeData(apodData, { slug })
}

const mergeImageData = apodData =>
  new Promise(resolve =>
    handleImage(apodData.url, apodData.slug)
      .then((imageData) => {
        resolve(mergeData(apodData, imageData))
      })
  )

const buildApod = date =>
  new Promise((resolve, reject) => {
    const checkMediaType = (apodData) => {
      if (apodData.media_type !== 'image') {
        reject(`${apodData.date}: media type is not image`)
        return null
      }

      return apodData
    }

    fetchApod(date)
      .then(checkMediaType)
      .then(mergeSlug)
      .then(mergeImageData)
      .then((apodData) => {
        resolve(
          new Apod(apodData)
        )
      })
      .catch((err) => {
        reject(err)
      })
  })

module.exports = buildApod
