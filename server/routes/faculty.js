const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;

// Get all faculty members
router.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, '../../data/faculty.json'), 'utf8');
        const faculty = JSON.parse(data).faculty;
        res.json({ faculty });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single faculty member
router.get('/:id', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, '../../data/faculty.json'), 'utf8');
        const faculty = JSON.parse(data).faculty;
        const member = faculty.find(f => f.id === req.params.id);
        if (!member) return res.status(404).json({ message: 'Faculty member not found' });
        res.json(member);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new faculty member
router.post('/', async (req, res) => {
    const faculty = new Faculty(req.body);
    try {
        const newFaculty = await faculty.save();
        res.status(201).json(newFaculty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update faculty member
router.patch('/:id', async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        if (!faculty) return res.status(404).json({ message: 'Faculty member not found' });
        
        Object.assign(faculty, req.body);
        const updatedFaculty = await faculty.save();
        res.json(updatedFaculty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete faculty member
router.delete('/:id', async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        if (!faculty) return res.status(404).json({ message: 'Faculty member not found' });
        
        await faculty.remove();
        res.json({ message: 'Faculty member deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 