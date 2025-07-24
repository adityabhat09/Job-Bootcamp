const express = require('express');
const router = express.Router();
// const Article = require('../models/Article');
const Article = require('../models/Article')

// GET all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET article by slug
router.get('/:slug', async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST new article
router.post('/', async (req, res) => {
  let {
    title,
    content,
    slug,
    metaTitle,
    metaDescription,
    metaKeywords,
    imageUrl 
  } = req.body;

  if (!title || !content || !slug) {
    return res.status(400).json({ message: 'Title, content, and slug are required' });
  }

  // ✅ Sanitize slug (e.g., "My Article Title" → "my-article-title")
  slug = slug.trim().toLowerCase().replace(/\s+/g, '-');

  try {
    const article = await Article.create({
      title,
      content,
      slug,
      imageUrl,
      metaTitle: metaTitle?.trim() || title,
      metaDescription: metaDescription?.trim() || content.slice(0, 160),
      metaKeywords: Array.isArray(metaKeywords) ? metaKeywords : []
    });
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create article', error: err.message });
  }
});

// DELETE article
router.delete('/:slug', async (req, res) => {
  try {
    const deleted = await Article.findOneAndDelete({ slug: req.params.slug });
    if (!deleted) return res.status(404).json({ message: 'Article not found' });
    res.json({ message: 'Article deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete article' });
  }
});


router.put('/:slug', async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    if (!article) return res.status(404).json({ message: 'Article not found' });

    // update only if provided
    ['title','content','slug','metaTitle','metaDescription','metaKeywords','imageUrl'].forEach(field => {
      if (req.body[field] !== undefined) {
        // ✅ Sanitize slug if it's being updated
        if (field === 'slug') {
          article[field] = req.body[field].trim().toLowerCase().replace(/\s+/g, '-');
        } else {
          article[field] = req.body[field];
        }
      }
    });

    await article.save();
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update article', error: err.message });
  }
});



module.exports = router;
