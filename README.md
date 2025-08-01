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

## Demo

Video link:
https://youtu.be/0ALErEmo6Q4

Screenshots:
![image](https://github.com/user-attachments/assets/3ce6de88-af40-48c4-a6be-9d97ee05c148)
![image](https://github.com/user-attachments/assets/1e1d23c7-f716-49bd-9ade-61ec6efcd06f)
![image](https://github.com/user-attachments/assets/1b2db7a3-88ba-4acf-ba17-f6b7ca0cf1aa)
![image](https://github.com/user-attachments/assets/cd719382-edb8-4394-b401-2fc7ed676e8e)
![image](https://github.com/user-attachments/assets/04b95950-d026-4722-bd39-868f06faea95)
![image](https://github.com/user-attachments/assets/c92cc8f0-6b1b-42fb-aa68-5e8bbdd39a6a)
![image](https://github.com/user-attachments/assets/29c53baa-0b12-4a56-ab49-5a7b8c0f4337)
![image](https://github.com/user-attachments/assets/d615f1b8-3fc4-4e2d-aba6-3a495373bdf0)
![image](https://github.com/user-attachments/assets/56b92965-c701-4489-9743-3d858fee3ed1)
![image](https://github.com/user-attachments/assets/2c6613c6-6e98-4d14-bb07-e9973568d2ed)
![image](https://github.com/user-attachments/assets/4ad6657f-0b90-4f12-abdc-33c3ad6c8b92)
![image](https://github.com/user-attachments/assets/f7866882-01bc-4a00-8cab-c48bd4f64d40)
![image](https://github.com/user-attachments/assets/2255cd42-8418-4150-bd69-7bbe1a7557ca)












<<<<<<< HEAD
This project is developed for the Physics Association, IIT Roorkee. All rights reserved. 
=======
>>>>>>> c6874d6f7c5bea44ed833b60e81fb47e9e1ffa65
