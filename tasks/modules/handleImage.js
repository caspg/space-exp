/* eslint-disable comma-dangle */
/* eslint-disable no-console */
const request = require('request')
const gm = require('gm')
const path = require('path')
const exec = require('child_process').exec
const fs = require('fs')

const THUMB_QUALITY = 65
const THUMB_WIDTH = 550

const destinationDir = path.resolve(__dirname, '../../public/thumbs')

const imagePath = slug =>
  `${destinationDir}/${slug}.jpg`

const dominantColor = slug =>
  new Promise((resolve) => {
    const command = `convert ${imagePath(slug)} -scale 1x1! -format '%[pixel:u]' info:-`

    exec(command, (err, stdout) => {
      if (err) console.log(err)
      resolve(stdout.replace(/^srgb/, 'rgb'))
    }
    )
  })

const saveThumb = (gmThumb, slug) =>
  new Promise((resolve, reject) => {
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir)
    }

    gmThumb
      .resize(THUMB_WIDTH)
      .quality(THUMB_QUALITY)
      .write(imagePath(slug), (err) => {
        if (err) {
          reject(err)
        } else {
          console.log('thumb created: ', slug)
          resolve()
        }
      })
  })

const thumbSize = gmImage =>
  new Promise((resolve) => {
    gmImage
      .resize(THUMB_WIDTH)
      .quality(THUMB_QUALITY)
      .stream((error, stdout) => {
        gm(stdout).size((err, size) => {
          if (err) console.log(err)
          resolve(size)
        })
      })
  })

const imageSize = gmImage =>
  new Promise((resolve) => {
    gmImage.size((err, size) => {
      if (err) console.log(err)
      resolve(size)
    })
  })

const handleImage = (url, slug) =>
  new Promise((resolve) => {
    const gmImage = gm(request(url))
    const promises = [
      imageSize(gmImage),
      thumbSize(gmImage),
      saveThumb(gmImage, slug).then(() => dominantColor(slug)),
    ]

    Promise.all(promises).then(values =>
      resolve({
        imageSize: values[0],
        thumbSize: values[1],
        dominantColor: values[2],
      })
    )
  })

module.exports = handleImage
