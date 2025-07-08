const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const courseSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: String,
  description: String,
  fees: Number,
  modules: [moduleSchema],
});

module.exports = mongoose.model('Course', courseSchema);
