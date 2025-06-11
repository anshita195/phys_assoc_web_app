import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  TextField,
  Tabs,
  Tab,
} from '@mui/material';
import axios from 'axios';

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: string;
  speaker?: {
    name: string;
    affiliation: string;
  };
  registrationRequired: boolean;
  registrationDeadline?: string;
  maxParticipants?: number;
  currentParticipants: number;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const now = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= now);
  const pastEvents = events.filter(event => new Date(event.date) < now);

  const filteredEvents = (selectedTab === 0 ? upcomingEvents : pastEvents)
    .filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Events
      </Typography>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Search events by title, description, or type"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label={`Upcoming Events (${upcomingEvents.length})`} />
          <Tab label={`Past Events (${pastEvents.length})`} />
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {filteredEvents.map((event) => (
          <Grid component="div" item xs={12} md={6} key={event._id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {event.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={event.type}
                    color="primary"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <Chip
                    label={new Date(event.date).toLocaleDateString()}
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Typography variant="body1" paragraph>
                  {event.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Location: {event.location}
                </Typography>
                {event.speaker && (
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Speaker: {event.speaker.name} ({event.speaker.affiliation})
                  </Typography>
                )}
                {event.registrationRequired && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Registration Deadline: {new Date(event.registrationDeadline!).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Participants: {event.currentParticipants}/{event.maxParticipants}
                    </Typography>
                  </Box>
                )}
              </CardContent>
              <CardActions>
                {event.registrationRequired && event.currentParticipants < (event.maxParticipants || Infinity) && (
                  <Button size="small" color="primary">
                    Register
                  </Button>
                )}
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Events; 