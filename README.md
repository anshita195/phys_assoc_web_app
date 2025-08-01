# Physics Association Web Application - Working Prototype

A modern full-stack web application prototype for the Physics Association at IIT Roorkee, demonstrating comprehensive faculty profile management, research showcase, and events calendar functionality.

## Project Overview

This is a **working prototype** developed as part of the Physics Association's initiative to modernize their digital presence. The application showcases how a production-ready website could serve the physics department's needs, featuring faculty profiles, research areas, and event management capabilities.

## Key Features

- **Faculty Profile Management**: Comprehensive faculty profiles with search functionality, research areas, publications, and education history
- **Research Showcase**: Detailed research areas with ongoing projects, funding information, and publications
- **Events Calendar**: Event management system with registration details, schedules, and speaker information
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Theme System**: Light/dark mode toggle with persistent user preferences
- **Modern UI/UX**: Material-UI components with smooth animations and professional design

## Tech Stack

### Frontend
- **React 18** with TypeScript for type-safe development
- **Material-UI (MUI)** for modern, accessible UI components
- **React Router** for client-side navigation
- **Axios** for API communication
- **Context API** for state management
- **Responsive design** with mobile-first approach

### Backend
- **Node.js** with Express.js framework
- **RESTful API** design with modular route structure
- **CORS** enabled for cross-origin requests
- **JSON-based data storage** for prototype demonstration
- **Error handling** and middleware implementation

## Project Structure

```
phys_assoc_web_app/
├── client/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── context/      # Theme context
│   │   └── App.tsx       # Main application component
│   └── package.json
│
├── server/                # Node.js Express backend
│   ├── routes/           # API route handlers
│   ├── data/            # JSON data files
│   ├── server.js        # Main server file
│   └── package.json
│
└── data/                 # Sample data for demonstration
    ├── faculty.json     # Faculty profiles
    ├── research.json    # Research areas
    └── events.json      # Event information
```

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will run on `http://localhost:3000`

## API Endpoints

- `GET /api/faculty` - Retrieve all faculty members
- `GET /api/faculty/:id` - Get specific faculty member details
- `GET /api/research` - Get research areas and projects
- `GET /api/events` - Get upcoming events
- `GET /api/courses` - Get course information

## Sample Data

The prototype includes sample data for demonstration:

### Faculty Profiles
- **3 faculty members** with complete profiles
- Research areas, publications, and education history
- Profile images and contact information

### Research Areas
- **3 main research areas**: Nuclear Physics, Electronics, Condensed Matter Physics
- Ongoing projects with funding details
- Publication records

### Events
- **3 sample events**: Colloquiums, open houses, club meetings
- Registration requirements and attendee limits
- Detailed schedules and speaker information

## Deployment

### Frontend (Netlify)
- Deployed at: `https://statuesque-fairy-c9e645.netlify.app`
- Automatic builds from Git repository
- Custom domain configuration

### Backend (Render)
- Deployed at: `https://phys-assoc-web-app.onrender.com`
- Free tier hosting with automatic scaling
- Environment variable management

## Technical Achievements

- **Full-stack development** with modern JavaScript/TypeScript
- **Responsive design** implementation across all devices
- **Production deployment** with CI/CD pipeline
- **API integration** with error handling and CORS
- **State management** using React Context API
- **Component-based architecture** for maintainability
- **Type safety** with TypeScript throughout the application

## Future Enhancements

This prototype demonstrates the foundation for a production website that could include:
- User authentication and admin panels
- Database integration (MongoDB/PostgreSQL)
- Real-time event updates
- Faculty profile editing capabilities
- Newsletter subscription system
- Integration with academic calendar systems

## Contributing

This prototype was developed as part of the Physics Association's digital transformation initiative. For questions or contributions, please contact the development team.

## License

This project is developed for the Physics Association, IIT Roorkee. All rights reserved. 