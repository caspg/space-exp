const mongoose = require('mongoose')
const fs = require('fs')

const initializeDb = require('../db')
const Apod = require('../db/apodSchema')

initializeDb()

const saveCollectionToFile = (collection) => {
  const json = JSON.stringify(collection, null, 2)

  fs.writeFile('./tasks/apod-json/apods.json', json, (err) => {
    if (err) throw err
    console.log('It\'s saved!')
  })
}

const queryOptions = {
  sort: {
    date: -1,
  },
}

Apod.find({}, '-_id -__v', queryOptions).then((collection) => {
  saveCollectionToFile(collection)
  mongoose.disconnect()
})
