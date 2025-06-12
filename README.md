# Physics Association Web Application

A modern web application for managing and displaying physics association information, including faculty profiles, events, and research activities.

## Features

- **Faculty Profiles**: View detailed information about faculty members including their research interests, publications, and contact information
- **Research Areas**: Explore different research areas and ongoing projects
- **Events**: Stay updated with upcoming physics events and seminars
- **News**: Latest news and announcements from the physics department
- **Contact Information**: Easy access to department contact details
- **Responsive Design**: Fully responsive layout that works on all devices

## Tech Stack

### Frontend
- React.js with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests
- React Icons for UI icons
- Framer Motion for animations

### Backend
- Node.js with Express
- MongoDB for database
- Mongoose for ODM
- CORS enabled for cross-origin requests
- Environment variables for configuration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the client directory with the following variables:
   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
phys_assoc_web_app/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── assets/       # Static assets
│   │   └── App.tsx       # Main application component
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── models/           # MongoDB models
    ├── routes/           # API routes
    ├── server.js         # Main server file
    └── package.json
```

## API Endpoints

- `GET /api/faculty` - Get all faculty members
- `GET /api/faculty/:id` - Get specific faculty member
- `GET /api/research` - Get research areas
- `GET /api/events` - Get events
- `GET /api/news` - Get news items

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
