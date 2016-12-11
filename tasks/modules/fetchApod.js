require('isomorphic-fetch')

const fetchData = (date) => {
  const apiKey = process.env.API_KEY

  if (typeof apiKey === 'undefined') {
    throw new Error(`
      ------------------------------------------------------------------
      API key is missing
      ------------------------------------------------------------------
    `)
  }

  const baseUri = 'https://api.nasa.gov/planetary/apod'
  const fullUri = `${baseUri}?api_key=${apiKey}&date=${date}`

  return fetch(fullUri).then((res) => {
    if (res.status !== 200) {
      console.log(JSON.stringify(res))
    }

    return res.json()
  })
}

module.exports = fetchData
