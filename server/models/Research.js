const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Quantum Physics', 'Particle Physics', 'Condensed Matter', 'Astrophysics', 'Biophysics', 'Other']
    },
    faculty: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty'
    }],
    publications: [{
        title: String,
        authors: [String],
        year: Number,
        journal: String,
        doi: String
    }],
    funding: {
        source: String,
        amount: Number,
        duration: String
    },
    status: {
        type: String,
        enum: ['Active', 'Completed', 'Proposed'],
        default: 'Active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Research', researchSchema); 