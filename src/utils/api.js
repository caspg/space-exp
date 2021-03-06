import fetch from 'isomorphic-fetch'

const baseUri = (process.env.NODE_ENV === 'production') ?
  `${process.env.HOST}/api` :
  `http://localhost:${process.env.PORT}/api`

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const fetchData = url =>
  fetch(url)
    .then(checkStatus)
    .then(res => res.json())

export const fetchApods = (date, perPage) =>
  fetchData(`${baseUri}/apods?date=${date}&perPage=${perPage}`)

export const fetchApodDetails = slug =>
  fetchData(`${baseUri}/apods/${slug}`)
