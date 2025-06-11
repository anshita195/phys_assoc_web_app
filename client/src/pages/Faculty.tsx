import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Box,
  Chip,
} from '@mui/material';
import axios from 'axios';

interface FacultyMember {
  id: string;
  name: string;
  title: string;
  specialization: string;
  bio: string;
  image: string;
  researchAreas: string[];
  email: string;
  publications: Array<{
    title: string;
    year: number;
    journal: string;
    doi: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: number;
  }>;
}

const Faculty = () => {
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get('/api/faculty', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        if (response.data && response.data.faculty) {
          setFaculty(response.data.faculty);
        } else {
          console.error('Invalid faculty data format:', response.data);
          setFaculty([]);
        }
      } catch (error) {
        console.error('Error fetching faculty:', error);
        setFaculty([]);
      }
    };

    fetchFaculty();
  }, []);

  const filteredFaculty = faculty.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.researchAreas.some(area =>
      area.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Faculty Members
      </Typography>

      <TextField
        fullWidth
        label="Search faculty by name, specialization, or research area"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {filteredFaculty.map((member) => (
            <Grid component="div" item xs={12} md={6} lg={4} key={member.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image || '/images/default-faculty.jpg'}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {member.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {member.specialization}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {member.bio}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {member.researchAreas.map((area, index) => (
                      <Chip
                        key={index}
                        label={area}
                        sx={{ mr: 1, mb: 1 }}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Faculty; 