const fs = require('fs')

const db = require('../../server/db')
const Apod = require('../../server/db/schema/apod')

db.initialize()

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
  db.disconnect()
})
