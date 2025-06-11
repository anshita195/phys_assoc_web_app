import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          p: 6,
          borderRadius: 2,
          mb: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Physics Association, IIT Roorkee
        </Typography>
        {/* <Typography variant="h5" component="h2" gutterBottom>
          Advancing the Frontiers of Physics Research and Education
        </Typography> */}
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="/about"
          sx={{ mt: 2 }}
        >
          Learn More
        </Button>
      </Box>

      {/* Featured Sections */}
      <Grid container spacing={4}>
        {/* Research Highlights */}
        <Grid component="div" item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/images/research.jpg"
              alt="Research"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Research Highlights
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Explore our cutting-edge research in quantum physics, particle physics,
                and more. Our faculty and students are pushing the boundaries of
                scientific knowledge.
              </Typography>
              <Button
                component={RouterLink}
                to="/research"
                sx={{ mt: 2 }}
              >
                View Research
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Events */}
        <Grid component="div" item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/images/events.jpg"
              alt="Events"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Upcoming Events
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Join us for seminars, workshops, and conferences featuring leading
                physicists from around the world.
              </Typography>
              <Button
                component={RouterLink}
                to="/events"
                sx={{ mt: 2 }}
              >
                View Events
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Faculty Spotlight */}
        <Grid component="div" item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/images/faculty.jpg"
              alt="Faculty"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Faculty Spotlight
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Meet our distinguished faculty members who are leaders in their
                respective fields of physics research and education.
              </Typography>
              <Button
                component={RouterLink}
                to="/faculty"
                sx={{ mt: 2 }}
              >
                Meet Faculty
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Us */}
        <Grid component="div" item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/images/contact.jpg"
              alt="Contact"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Have questions about our programs, research, or events? We'd love to
                hear from you.
              </Typography>
              <Button
                component={RouterLink}
                to="/contact"
                sx={{ mt: 2 }}
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home; 