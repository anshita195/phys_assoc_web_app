const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// CORS middleware - allow all origins in development
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/faculty', require('./routes/faculty'));
app.use('/api/research', require('./routes/research'));
app.use('/api/events', require('./routes/events'));
app.use('/api/courses', require('./routes/courses'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 