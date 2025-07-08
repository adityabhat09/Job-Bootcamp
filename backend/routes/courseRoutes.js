const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET /api/courses/:slug
router.get('/:slug', async (req, res) => {
  console.log('Received slug:', req.params.slug); // 🔍 add this line
  try {
    
    const course = await Course.findOne({ slug: req.params.slug });
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/courses
router.post('/', async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (err) {
    console.error('Error creating course:', err);
    res.status(500).json({ message: 'Failed to create course' });
  }
});


module.exports = router;
