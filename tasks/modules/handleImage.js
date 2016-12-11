/* eslint-disable comma-dangle */
/* eslint-disable no-console */
const request = require('request')
const gm = require('gm')
const path = require('path')

const THUMB_QUALITY = 70
const THUMB_WIDTH = 600

const saveThumb = (gmThumb, slug) => {
  const destinationPath = path.resolve(__dirname, '../../tmp')

  return new Promise((resolve, reject) => {
    gmThumb
      .resize(THUMB_WIDTH)
      .quality(THUMB_QUALITY)
      .write(`${destinationPath}/${slug}.jpg`, (err) => {
        if (err) {
          reject(err)
        } else {
          console.log('thumb created: ', slug)
          resolve()
        }
      })
  })
}

const thumbSize = gmImage =>
  new Promise((resolve) => {
    gmImage
      .resize(THUMB_WIDTH)
      .quality(THUMB_QUALITY)
      .stream((error, stdout) => {
        gm(stdout).size((err, size) => {
          if (!err) {
            resolve(size)
          }
        })
      })
  })

const imageSize = gmImage =>
  new Promise((resolve) => {
    gmImage.size((err, size) => {
      if (!err) {
        resolve(size)
      }
    })
  })

const handleImage = (url, slug) =>
  new Promise((resolve) => {
    const gmImage = gm(request(url))
    const promises = [
      imageSize(gmImage),
      thumbSize(gmImage),
      saveThumb(gmImage, slug),
    ]

    Promise.all(promises).then(values =>
      resolve({
        image: values[0],
        thumb: values[1],
      })
    )
  })

module.exports = handleImage
