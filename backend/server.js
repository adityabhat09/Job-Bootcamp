const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Course = require('./models/Course'); // ✅ Import model

const app = express();
app.use(cors());
app.use(express.json());

// ✅ INSERT FUNCTION HERE
const insertTestCourse = async () => {
  const exists = await Course.findOne({ slug: 'mern' });
  if (exists) {
    console.log('ℹ️ "mern" course already exists');
    return;
  }

  await Course.create({
    slug: 'mern',
    name: 'MERN Stack Bootcamp',
    description: 'Learn fullstack development using MongoDB, Express, React, and Node.js.',
    fees: 9999,
    modules: [
      {
        title: 'Intro to MERN',
        description: 'Understand how the stack fits together',
      },
      {
        title: 'React Basics',
        description: 'Learn components, state, props, and hooks',
      },
    ],
  });

  console.log('✅ Test course "mern" inserted');
};

// 🔌 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('✅ MongoDB Connected');

    // ✅ INSERT CALL HERE
    await insertTestCourse();

    // Optional: log all data
    const allCourses = await Course.find();
    console.log('📄 All Courses in DB:', allCourses);
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/courses', require('./routes/courseRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
