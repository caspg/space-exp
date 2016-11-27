const mongoose = require('mongoose');
const gm = require('gm')
const request = require('request')

const initializeDb = require('../db');
const Apod = require('../db/apodSchema');

initializeDb()

const createThumb = (url, slug) => {
  const stream = request(url)
  gm(stream)
    .resize(600)
    .quality(70)
    .write(`./tasks/create-thumb/tmp/${slug}.jpg`, (err) => {
      if (!err) console.log('done')
    })
}

Apod.find({}, '-_id -__v').then((collection) => {
  collection.forEach((apod) => {
    createThumb(apod.url, apod.slug)
  })

  mongoose.disconnect();
});
