const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 });
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get upcoming events
router.get('/upcoming', async (req, res) => {
    try {
        const events = await Event.find({
            date: { $gte: new Date() }
        }).sort({ date: 1 });
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single event
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new event
router.post('/', async (req, res) => {
    const event = new Event(req.body);
    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update event
router.patch('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        
        Object.assign(event, req.body);
        const updatedEvent = await event.save();
        res.json(updatedEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete event
router.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        
        await event.remove();
        res.json({ message: 'Event deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 