const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: String,
  description: String,
  topics: [String], // ✅ subtopics
});

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const courseSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: String,
  description: String,
  fees: Number,
  modules: [moduleSchema],
  faqs: [faqSchema], // ✅ add this line
});

module.exports = mongoose.model('Course', courseSchema);
