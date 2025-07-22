const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST new blog
// routes/blog.js
router.post('/', async (req, res) => {
  const {
    title,
    content,
    slug,
    metaTitle,
    metaDescription,
    metaKeywords
  } = req.body;

  if (!title || !content || !slug) {
    return res.status(400).json({ message: 'Title, content, and slug are required' });
  }

  try {
    const blog = await Blog.create({
      title,
      content,
      slug,
      metaTitle: metaTitle?.trim() || title,
      metaDescription: metaDescription?.trim() || content.slice(0, 160),
      metaKeywords: Array.isArray(metaKeywords) ? metaKeywords : []
    });
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create blog', error: err.message });
  }
});

// DELETE blog
router.delete('/:slug', async (req, res) => {
  try {
    const deleted = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!deleted) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete blog' });
  }
});


// UPDATE blog by slug
router.put('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // update only if provided
    ['title','content','slug','metaTitle','metaDescription','metaKeywords'].forEach(field => {
      if (req.body[field] !== undefined) {
        blog[field] = req.body[field];
      }
    });

    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update blog', error: err.message });
  }
});


module.exports = router;
