import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  School as SchoolIcon,
  Science as ScienceIcon,
  Group as GroupIcon,
  EmojiEvents as EmojiEventsIcon,
} from '@mui/icons-material';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        About Our Department
      </Typography>

      <Grid container spacing={4}>
        {/* Mission Statement */}
        <Grid component="div" item xs={12}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              Overview
            </Typography>
            <Typography paragraph>
              {/* The Physics Department is dedicated to advancing scientific knowledge through research,
              education, and innovation. We strive to create an inclusive environment that fosters
              intellectual growth and scientific discovery. */}
              The Physics Department of IIT Roorkee is a world-famous center of quality teaching and cutting-edge research. Equipped with latest state-of-the art research facilities and international standard infrastructures, the department is well-known for its expert faculties and high-quality students.
            </Typography>
          </Paper>
        </Grid>

        {/* Department Overview */}
        <Grid component="div" item xs={12} md={6}>
          <Paper sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
                Our Mission
            </Typography>
            <Typography paragraph>
              {/* Founded in 1960, our department has grown to become a leading center for physics
              research and education. We offer comprehensive programs at both undergraduate and
              graduate levels, with a strong emphasis on hands-on research experience. */}
              The research activity in the department is recognized by CSIR, AICTE, DST, DRDO and ISRO etc. and a number of research projects are funded by industries.
            </Typography>
            <Typography paragraph>
              {/* Our faculty members are internationally recognized experts in their fields,
              conducting cutting-edge research across various domains of physics. */}
              One of the mission of the department is to actively promote industry-academia collaboration for generating next generation applied physicists and engineers. We have two faculty run start-ups (i.e Biofluidics Innovation Pvt Ltd and IndiEnergy) as a results of rich entrepreneurship culture in the department.
            </Typography>
          </Paper>
        </Grid>

        {/* Research Areas */}
        <Grid component="div" item xs={12} md={6}>
          <Paper sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Research Areas
            </Typography>
            <Typography paragraph>
              {/* Our research spans multiple disciplines: */}
              The department is actively involved in disruptive technology research including:
            </Typography>
            <ul>
              {/* <li>Quantum Physics and Information</li>
              <li>Condensed Matter Physics</li>
              <li>Particle Physics</li>
              <li>Astrophysics and Cosmology</li>
              <li>Biophysics</li> */}
              <li>energy conversion and storage</li>
              <li>advanced fiber optics and communication system</li>
              <li>quantum optics</li>
              <li>High-TC superconductivity</li>
              <li>IT, AI/ML</li>
            </ul>
            <Typography paragraph>
              {/* Our research spans multiple disciplines: */}
              to excel in the new areas of research and development
            </Typography>
          </Paper>
        </Grid>

        {/* Achievements */}
        <Grid component="div" item xs={12}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Our Achievements
            </Typography>
            <Grid container spacing={3}>
              <Grid component="div" item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <GroupIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6">30+</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Faculty Members
                  </Typography>
                </Box>
              </Grid>
              <Grid component="div" item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <ScienceIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6">15+</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ongoing Research Projects
                  </Typography>
                </Box>
              </Grid>
              <Grid component="div" item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6">100+</Typography>
                  <Typography variant="body2" color="text.secondary">
                    PhD scholars
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 