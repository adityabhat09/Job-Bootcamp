const mongoose = require('mongoose');


//schema
const articleSchema = new mongoose.Schema({
  title:           { type: String, required: true },
  content:         { type: String, required: true },
  slug:            { type: String, required: true, unique: true },
  createdAt:       { type: Date,   default: Date.now },
  metaTitle:       { type: String, default: '' },
  metaDescription: { type: String, default: '' },
  metaKeywords:    { type: [String], default: [] },
  imageUrl:        { type: String, default: '' }   
});



module.exports = mongoose.model('Article', articleSchema);
