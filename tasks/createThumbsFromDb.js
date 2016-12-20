const db = require('../server/db')
const Apod = require('../server/db/schema/apod')
const handleImage = require('./modules/handleImage')

db.initialize()

Apod.find({}).then((apods) => {
  db.disconnect()

  apods.forEach(({ url, slug }) => {
    handleImage(url, slug)
  })
})
