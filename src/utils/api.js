import fetch from 'isomorphic-fetch'

const baseUri = () => {
  if (process.env.NODE_ENV === 'production') {
    return `http://${process.env.HOST}`
  }

  return `http://localhost:${process.env.PORT}`
}

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

export const fetchApods = date =>
  fetchData(`${baseUri}/apods?date=${date}`)

export const fetchApodDetails = slug =>
  fetchData(`${baseUri}/apods/${slug}`)
