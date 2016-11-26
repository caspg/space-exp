const Apod = require('../../db/apodSchema')
const slugify = require('./slugify')

const buildApod = (result) => {
  const slugifyTitle = slugify(result.title)
  const slug = `${result.date}-${slugifyTitle}`

  return new Apod(
    Object.assign({}, result, { slug })
  )
}

module.exports = buildApod
