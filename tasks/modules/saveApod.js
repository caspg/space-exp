const saveApod = apod =>
  apod.save()
    .then(() => console.log('apod saved! date: ', apod.date))
    .catch(() => console.log('apod exist! date: ', apod.date))

module.exports = saveApod
