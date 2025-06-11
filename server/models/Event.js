const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Seminar', 'Conference', 'Workshop', 'Guest Lecture', 'Other'],
        required: true
    },
    speaker: {
        name: String,
        affiliation: String
    },
    registrationRequired: {
        type: Boolean,
        default: false
    },
    registrationDeadline: Date,
    maxParticipants: Number,
    currentParticipants: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema); 