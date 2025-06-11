const mongoose = require('mongoose');
const Faculty = require('./models/Faculty');
const Research = require('./models/Research');
const Event = require('./models/Event');
require('dotenv').config();

const facultyData = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Professor',
    email: 'sarah.johnson@university.edu',
    specialization: 'Quantum Physics',
    bio: 'Dr. Johnson is a leading expert in quantum computing and quantum information theory.',
    image: '/images/faculty/sarah-johnson.jpg',
    researchAreas: ['Quantum Computing', 'Quantum Information', 'Quantum Materials'],
    publications: [
      {
        title: 'Quantum Entanglement in Novel Materials',
        year: 2023,
        journal: 'Physical Review Letters'
      }
    ],
    education: [
      {
        degree: 'Ph.D.',
        institution: 'MIT',
        year: 2010
      }
    ]
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Associate Professor',
    email: 'michael.chen@university.edu',
    specialization: 'Particle Physics',
    bio: 'Dr. Chen conducts research in high-energy physics and particle interactions.',
    image: '/images/faculty/michael-chen.jpg',
    researchAreas: ['High-Energy Physics', 'Particle Interactions', 'Standard Model'],
    publications: [
      {
        title: 'New Insights into Particle Interactions',
        year: 2022,
        journal: 'Journal of High Energy Physics'
      }
    ],
    education: [
      {
        degree: 'Ph.D.',
        institution: 'Stanford University',
        year: 2012
      }
    ]
  }
];

const researchData = [
  {
    title: 'Quantum Computing with Novel Materials',
    description: 'Investigating the use of new materials for quantum computing applications.',
    category: 'Quantum Physics',
    faculty: [], // Will be populated with faculty IDs
    publications: [
      {
        title: 'Quantum Computing with Novel Materials',
        authors: ['Sarah Johnson', 'Michael Chen'],
        year: 2023,
        journal: 'Nature Physics',
        doi: '10.1038/nphys1234'
      }
    ],
    funding: {
      source: 'National Science Foundation',
      amount: 1000000,
      duration: '3 years'
    },
    status: 'Active'
  },
  {
    title: 'Particle Physics at the Energy Frontier',
    description: 'Research in high-energy particle physics and fundamental interactions.',
    category: 'Particle Physics',
    faculty: [], // Will be populated with faculty IDs
    publications: [
      {
        title: 'New Particle Discoveries at the LHC',
        authors: ['Michael Chen'],
        year: 2022,
        journal: 'Physical Review D',
        doi: '10.1103/physrevd.123.456789'
      }
    ],
    funding: {
      source: 'Department of Energy',
      amount: 2000000,
      duration: '5 years'
    },
    status: 'Active'
  }
];

const eventData = [
  {
    title: 'Quantum Computing Workshop',
    description: 'A hands-on workshop on quantum computing fundamentals and applications.',
    date: new Date('2024-04-15'),
    location: 'Physics Building, Room 101',
    type: 'Workshop',
    speaker: {
      name: 'Dr. Sarah Johnson',
      affiliation: 'University Physics Department'
    },
    registrationRequired: true,
    registrationDeadline: new Date('2024-04-01'),
    maxParticipants: 30,
    currentParticipants: 0
  },
  {
    title: 'Particle Physics Seminar',
    description: 'Recent advances in particle physics research.',
    date: new Date('2024-03-20'),
    location: 'Physics Building, Room 202',
    type: 'Seminar',
    speaker: {
      name: 'Dr. Michael Chen',
      affiliation: 'University Physics Department'
    },
    registrationRequired: false
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/phys_assoc');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Faculty.deleteMany({});
    await Research.deleteMany({});
    await Event.deleteMany({});
    console.log('Cleared existing data');

    // Insert faculty
    const faculty = await Faculty.insertMany(facultyData);
    console.log('Inserted faculty data');

    // Update research data with faculty IDs
    const updatedResearchData = researchData.map((research, index) => ({
      ...research,
      faculty: [faculty[index]._id]
    }));

    // Insert research
    await Research.insertMany(updatedResearchData);
    console.log('Inserted research data');

    // Insert events
    await Event.insertMany(eventData);
    console.log('Inserted event data');

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 