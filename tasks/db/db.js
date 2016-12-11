const mongoose = require('mongoose')

mongoose.Promise = Promise

const initializeDb = () => {
  const DB_URI = 'mongodb://localhost:27017/space-exp'

  mongoose.connection
    .on('error', console.error.bind(console, 'connection error'))
    .on('close', () => { console.log('bye bye!') })
    .once('open', () => {
      console.log('yay, connected')
    })

  mongoose.connect(DB_URI)
}

const disconnectDb = () =>
  mongoose.disconnect()

module.exports = {
  initialize: initializeDb,
  disconnect: disconnectDb,
}
