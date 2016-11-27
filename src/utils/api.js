import fetch from 'isomorphic-fetch'

const BASE_URI = 'http://localhost:3000/api'

export const fetchApods = () =>
  fetch(`${BASE_URI}/apods`)
    .then(res => res.json())

export const fetchApodDetails = slug =>
  fetch(`${BASE_URI}/apods/${slug}`)
    .then(res => res.json())
