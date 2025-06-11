import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import axios from 'axios';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error sending message. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        <Grid component="div" item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              Have questions about our programs, research, or events? We'd love to hear from you.
              Fill out the form and we'll get back to you as soon as possible.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Department of Physics
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Indian Institute of Technology Roorkee,
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Roorkee-247667, Uttarakhand, India
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Email: 
                physics_office@iitr.ac.in
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +91-1332-284348
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid component="div" item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={4}
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 