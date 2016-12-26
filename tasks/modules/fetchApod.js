require('isomorphic-fetch')

const { APOD_API_KEY } = require('../../secrets.js')

const fetchData = (date) => {
  const baseUri = 'https://api.nasa.gov/planetary/apod'
  const fullUri = `${baseUri}?api_key=${APOD_API_KEY}&date=${date}`

  return fetch(fullUri).then((res) => {
    if (res.status !== 200) {
      throw new Error(
        console.log(JSON.stringify(res))
      )
    }

    return res.json()
  })
}

module.exports = fetchData
