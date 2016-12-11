// 1. fetch image stream
// 2. get size information
// 3. create thumb
// 4. get thumb size information
// 5. save thumb to temp/dir

/* eslint-disable comma-dangle */

const request = require('request')
const gm = require('gm')

const THUMB_QUALITY = 70
const THUMB_WIDTH = 600

class ApodImage {
  static gmImageSize(gmObject) {
    return new Promise((resolve) => {
      gmObject.size({ bufferStream: true }, (err, size) => {
        if (!err) {
          resolve(size)
        }
      })
    })
  }

  constructor({ url }) {
    this.stream = request(url)
    this.gmApodImage = gm(this.stream)
  }

  buildThumbStream() {
    return new Promise((resolve) => {
      gm(this.stream)
        .resize(THUMB_WIDTH)
        .quality(THUMB_QUALITY)
        .stream((err, stdout) => {
          const gmObject = gm(stdout)
          resolve(gmObject)
        })
    })
  }

  imageSize() {
    return ApodImage.gmImageSize(this.gmApodImage)
  }

  thumbSize() {
    return this.buildThumbStream()
      .then(ApodImage.gmImageSize)
  }
}

const url = 'http://apod.nasa.gov/apod/image/1611/Tafreshi_DSC8114Ps.jpg'
const image = new ApodImage({ url })

image.imageSize().then(size => console.log('IMAGE: ', size))
image.thumbSize().then(size => console.log('IMAGE: ', size))
