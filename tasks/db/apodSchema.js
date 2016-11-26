const mongoose = require('mongoose');

const apodSchema = mongoose.Schema({
  date: { type: String, unique: true },
  slug: { type: String, index: { unique: true } },
  copyright: String,
  explanation: String,
  hdurl: String,
  media_type: String,
  title: String,
  url: String,
});

module.exports = mongoose.model('Apod', apodSchema);
