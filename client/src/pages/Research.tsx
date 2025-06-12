import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

interface ResearchArea {
  id: string;
  name: string;
  description: string;
  faculty: string[];
  projects: Array<{
    title: string;
    description: string;
    funding: string;
    duration: string;
  }>;
  publications: Array<{
    title: string;
    authors: string[];
    year: number;
    journal: string;
  }>;
}

const Research = () => {
  const [research, setResearch] = useState<ResearchArea[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const apiUrl = process.env.NODE_ENV === 'production'
          ? 'https://phys-assoc-web-app.onrender.com/api/research'
          : 'http://localhost:5000/api/research';
          
        const response = await axios.get(apiUrl, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        });
        setResearch(response.data);
      } catch (error) {
        console.error('Error fetching research:', error);
      }
    };

    fetchResearch();
  }, []);

  const filteredResearch = research.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Research Areas
      </Typography>

      <TextField
        fullWidth
        label="Search research areas"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={4}>
        {filteredResearch.map((item) => (
          <Grid component="div" item xs={12} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {item.description}
                </Typography>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Projects</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.projects.map((project, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="h6">{project.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Funding: {project.funding} | Start Date: {project.duration}
                        </Typography>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Publications</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.publications.map((pub, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">{pub.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Authors: {pub.authors.join(', ')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {pub.journal} ({pub.year})
                        </Typography>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Research; 