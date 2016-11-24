const mongoose = require('mongoose');

const apodSchema = mongoose.Schema({
  copyright: String,
  date: { type: String, unique: true },
  explanation: String,
  hdurl: String,
  media_type: String,
  title: String,
  url: String,
});

module.exports = mongoose.model('Apod', apodSchema);
