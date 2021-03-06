const moment = require('moment')

const db = require('../server/db')
const buildApod = require('./modules/buildApod')
const saveApod = require('./modules/saveApod')

const today = moment().format('YYYY-MM-DD')

db.initialize()

buildApod(today)
  .then(saveApod)
  .then(() => {
    db.disconnect()
  })
  .catch((err) => {
    db.disconnect()
    console.log(err)
  })
