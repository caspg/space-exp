const mongoose = require('mongoose');

const apodSchema = mongoose.Schema({
  date: { type: String, index: { unique: true } },
  slug: { type: String, index: { unique: true } },
  copyright: String,
  explanation: String,
  hdurl: String,
  media_type: String,
  title: String,
  url: String,
  imageSize: { width: Number, height: Number },
  thumbSize: { width: Number, height: Number },
  dominantColor: String,
});

module.exports = mongoose.model('Apod', apodSchema);
