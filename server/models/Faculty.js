const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    specialization: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'default-faculty.jpg'
    },
    publications: [{
        title: String,
        year: Number,
        journal: String
    }],
    researchAreas: [String],
    education: [{
        degree: String,
        institution: String,
        year: Number
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Faculty', facultySchema); 