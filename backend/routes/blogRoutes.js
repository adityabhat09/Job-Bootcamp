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
router.post('/', async (req, res) => {
  const { title, content, slug } = req.body;
  if (!title || !content || !slug) {
    return res.status(400).json({ message: 'Title, content, and slug are required' });
  }

  const exists = await Blog.findOne({ slug });
  if (exists) return res.status(400).json({ message: 'Slug already exists' });

  try {
    const blog = await Blog.create({ title, content, slug });
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create blog' });
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
  const { title, content, slug: newSlug } = req.body;

  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Update fields if provided
    if (title) blog.title = title;
    if (content) blog.content = content;
    if (newSlug) blog.slug = newSlug;

    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update blog', error: err.message });
  }
});


module.exports = router;
