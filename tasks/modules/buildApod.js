const fetchApod = require('./fetchApod')
const handleImage = require('./handleImage')
const slugify = require('./slugify')
const Apod = require('../db/schema/apod')

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
  new Promise((resolve) => {
    fetchApod(date)
      .then(mergeSlug)
      .then(mergeImageData)
      .then((apodData) => {
        resolve(
          new Apod(apodData)
        )
      })
  })

module.exports = buildApod
