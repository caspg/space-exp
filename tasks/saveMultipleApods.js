const moment = require('moment')

const db = require('./db')
const buildApod = require('./modules/buildApod')
const saveApod = require('./modules/saveApod')

const apodsCountToFetch = Number(process.argv[2]) || 4

db.initialize()

const fetchAndSaveApod = (i) => {
  const date = moment().subtract(i, 'days').format('YYYY-MM-DD')

  return buildApod(date)
    .then(saveApod)
    .catch(err => console.log(err))
}

const promises = []
for (let i = 0; i < apodsCountToFetch; i += 1) {
  promises.push(fetchAndSaveApod(i))
}

Promise.all(promises).then(() => db.disconnect())
