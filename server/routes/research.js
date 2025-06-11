const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;

// Get all research areas
router.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, '../../data/research.json'), 'utf8');
        const research = JSON.parse(data).researchAreas;
        res.json(research);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get research by category
router.get('/category/:category', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, '../../data/research.json'), 'utf8');
        const research = JSON.parse(data).researchAreas;
        const filteredResearch = research.filter(r => 
            r.name.toLowerCase().includes(req.params.category.toLowerCase())
        );
        res.json(filteredResearch);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single research project
router.get('/:id', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, '../../data/research.json'), 'utf8');
        const research = JSON.parse(data).researchAreas;
        const project = research.find(r => r.id === req.params.id);
        if (!project) return res.status(404).json({ message: 'Research project not found' });
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new research project
router.post('/', async (req, res) => {
    const research = new Research(req.body);
    try {
        const newResearch = await research.save();
        res.status(201).json(newResearch);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update research project
router.patch('/:id', async (req, res) => {
    try {
        const research = await Research.findById(req.params.id);
        if (!research) return res.status(404).json({ message: 'Research project not found' });
        
        Object.assign(research, req.body);
        const updatedResearch = await research.save();
        res.json(updatedResearch);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete research project
router.delete('/:id', async (req, res) => {
    try {
        const research = await Research.findById(req.params.id);
        if (!research) return res.status(404).json({ message: 'Research project not found' });
        
        await research.remove();
        res.json({ message: 'Research project deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 