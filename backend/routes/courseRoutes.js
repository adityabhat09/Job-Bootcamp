const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET all courses
router.get('/', async (req, res) => {
try {
const courses = await Course.find();
res.json(courses);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
});

// GET /api/courses/:slug
router.get('/:slug', async (req, res) => {
console.log('Received slug:', req.params.slug);
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
const { name, slug, description, fees, modules, faqs } = req.body; // ✅ include faqs
if (!name || !slug) {
  return res.status(400).json({ message: 'Course name and slug are required' });
}

const existingCourse = await Course.findOne({ slug });
if (existingCourse) {
  return res.status(400).json({ message: 'A course with this slug already exists' });
}

if (!Array.isArray(modules) || modules.some(mod => !mod.title || !mod.description)) {
  return res.status(400).json({ message: 'Each module must have a title and description' });
}

const newCourse = await Course.create({
  name: name.trim(),
  slug: slug.trim(),
  description: description?.trim() || '',
  fees,
  modules,
  faqs: faqs || [], // ✅ set faqs if provided, else empty array
});

res.status(201).json(newCourse);

} catch (err) {
console.error('Error creating course:', err);
res.status(500).json({ message: 'Failed to create course' });
}
});

// PUT /api/courses/:slug – Update a course by slug
router.put('/:slug', async (req, res) => {
try {
const updatedCourse = await Course.findOneAndUpdate(
{ slug: req.params.slug },
req.body, // ✅ faqs will be updated if present in body
{ new: true }
);

if (!updatedCourse) {
  return res.status(404).json({ message: 'Course not found' });
}

res.json(updatedCourse);

} catch (err) {
console.error('Error updating course:', err);
res.status(500).json({ message: 'Failed to update course' });
}
});

// DELETE /api/courses/:slug
router.delete('/:slug', async (req, res) => {
try {
const deleted = await Course.findOneAndDelete({ slug: req.params.slug });
if (!deleted) return res.status(404).json({ message: 'Course not found' });
res.json({ message: 'Course deleted successfully' });
} catch (err) {
console.error('Error deleting course:', err);
res.status(500).json({ message: 'Failed to delete course' });
}
});

module.exports = router;