const mongoose = require('mongoose');

// 1. Define a schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

// 2. Create and export model
module.exports = mongoose.model('Blog', blogSchema);
