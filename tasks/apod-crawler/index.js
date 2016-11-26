const moment = require('moment')
const mongoose = require('mongoose')

const initializeDb = require('../db')
const apodApi = require('./utils/ApodApi')
const buildApod = require('./utils/buildApod')

const APODS_COUNT_TO_FETCH = 20

initializeDb()
const promises = []

const fetchAndSaveData = (i) => {
  const date = moment().subtract(i, 'days').format('YYYY-MM-DD')

  const handleFetchSuccess = (result) => {
    if (result.error || result.code === 500) {
      return null
    }

    const apod = buildApod(result)

    return apod.save()
      .then(() => console.log('result saved! date: ', result.date))
      .catch(() => console.log('result exist! date: ', result.date))
  }

  const fetchApod = () => (
    apodApi.fetchData(date).then(handleFetchSuccess)
  )

  promises.push(fetchApod())
}

for (let i = 0; i <= APODS_COUNT_TO_FETCH; i += 1) {
  fetchAndSaveData(i)
}

Promise.all(promises).then(() => {
  mongoose.disconnect()
})
