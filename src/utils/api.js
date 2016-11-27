import fetch from 'isomorphic-fetch'

const BASE_URI = 'http://localhost:3000/api'

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

export const fetchApods = () =>
  fetchData(`${BASE_URI}/apods`)

export const fetchApodDetails = slug =>
  fetchData(`${BASE_URI}/apods/${slug}`)
