const moment = require('moment')

const db = require('../server/db')
const buildApod = require('./modules/buildApod')
const saveApod = require('./modules/saveApod')

const apodsCountToFetch = Number(process.argv[2]) || 4
const startDate = process.argv[3]

db.initialize()

const fetchAndSaveApod = i =>
  new Promise((resolve) => {
    const date = moment(startDate).subtract(i, 'days').format('YYYY-MM-DD')

    setTimeout(() => {
      buildApod(date)
        .then(saveApod)
        .then(resolve)
        .catch(err => console.log(err))
    }, 800 * i)
  })

const promises = []
for (let i = 0; i < apodsCountToFetch; i += 1) {
  promises.push(fetchAndSaveApod(i))
}

Promise.all(promises).then(() => db.disconnect())
