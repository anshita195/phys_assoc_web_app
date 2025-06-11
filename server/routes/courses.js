const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const COURSES_FILE = path.join(__dirname, '../data/courses.json');

// Helper function to read courses data
async function readCoursesData() {
  try {
    const data = await fs.readFile(COURSES_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading courses data:', error);
    return [];
  }
}

// Helper function to write courses data
async function writeCoursesData(data) {
  try {
    await fs.writeFile(COURSES_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing courses data:', error);
    return false;
  }
}

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await readCoursesData();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

// Get a specific course
router.get('/:id', async (req, res) => {
  try {
    const courses = await readCoursesData();
    const course = courses.find(c => c.id === req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course' });
  }
});

// Create a new course
router.post('/', async (req, res) => {
  try {
    const courses = await readCoursesData();
    const newCourse = {
      id: Date.now().toString(),
      ...req.body
    };
    courses.push(newCourse);
    await writeCoursesData(courses);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course' });
  }
});

// Update a course
router.put('/:id', async (req, res) => {
  try {
    const courses = await readCoursesData();
    const index = courses.findIndex(c => c.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'Course not found' });
    }
    courses[index] = { ...courses[index], ...req.body };
    await writeCoursesData(courses);
    res.json(courses[index]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating course' });
  }
});

// Delete a course
router.delete('/:id', async (req, res) => {
  try {
    const courses = await readCoursesData();
    const filteredCourses = courses.filter(c => c.id !== req.params.id);
    if (filteredCourses.length === courses.length) {
      return res.status(404).json({ message: 'Course not found' });
    }
    await writeCoursesData(filteredCourses);
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course' });
  }
});

module.exports = router; 