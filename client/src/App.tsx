import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Faculty from './pages/Faculty';
import Research from './pages/Research';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh'
        }}>
          <Navbar />
          <main style={{ 
            flex: 1, 
            padding: '2rem 0',
            maxWidth: '100%',
            overflowX: 'hidden'
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/research" element={<Research />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
