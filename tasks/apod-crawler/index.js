const moment = require('moment');
const mongoose = require('mongoose');

const apodApi = require('./utils/ApodApi');
const initializeDb = require('../db');
const Apod = require('../db/apodSchema');

const APODS_COUNT_TO_FETCH = 20;

initializeDb();
let promises = [];

const fetchAndSaveData = (i) => {
  const date = moment().subtract(i, 'days').format('YYYY-MM-DD');

  const handleFetchSuccess = (result) => {
    if (result.error || result.code === 500) {
      console.log(result.error.message);
      return null;
    }

    const apod = new Apod(result);

    return apod.save()
      .then(() => console.log('result saved! date: ', result.date))
      .catch((err) => console.log('result exist! date: ', result.date));
  };

  const fetchApod = () =>(
    apodApi.fetchData(date).then(handleFetchSuccess)
  );

  promises.push(fetchApod());
}

for (let i = 0; i <= APODS_COUNT_TO_FETCH; i++) {
  fetchAndSaveData(i);
}

Promise.all(promises).then(() => {
  mongoose.disconnect()
});
