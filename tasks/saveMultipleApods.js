const moment = require('moment')

const db = require('./db')
const buildApod = require('./modules/buildApod')
const saveApod = require('./modules/saveApod')

const APODS_COUNT_TO_FETCH = 4

db.initialize()

const fetchAndSaveApod = (i) => {
  const date = moment().subtract(i, 'days').format('YYYY-MM-DD')

  return buildApod(date)
    .then(saveApod)
    .catch(err => console.log(err))
}

const promises = []
for (let i = 0; i <= APODS_COUNT_TO_FETCH; i += 1) {
  promises.push(fetchAndSaveApod(i))
}

Promise.all(promises).then(() => db.disconnect())
