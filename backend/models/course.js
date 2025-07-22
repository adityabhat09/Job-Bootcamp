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
  slug:     { type: String, required: true, unique: true },
  name:     String,
  description: String,
  fees:     Number,
  modules:  [moduleSchema],
  faqs:     [faqSchema],

  // ─── NEW META FIELDS ─────────────────────────────────────────────────────
  metaTitle:       { type: String, default: '' },
  metaDescription: { type: String, default: '' },
  metaKeywords:    [String],  // e.g. ['mern','react','node']
});


module.exports = mongoose.model('Course', courseSchema);
