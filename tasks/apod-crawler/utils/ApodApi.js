require('isomorphic-fetch');

class ApodApi {
  constructor() {
    const apiKey = process.env.API_KEY;
    const baseUri = 'https://api.nasa.gov/planetary/apod';

    this.uri = `${baseUri}?api_key=${apiKey}`;
  }

  fetchData(date) {
    const withDate = `${this.uri}&date=${date}`;
    return fetch(withDate).then(res => res.json())
  }
}

module.exports = new ApodApi;
