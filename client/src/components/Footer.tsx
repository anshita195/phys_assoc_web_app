import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid component="div" item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Physics Association,
              <br></br>
                IIT Roorkee
            </Typography>
            {/* <Typography variant="body2" sx={{ mb: 2 }}>
            A world-famous center of quality teaching and cutting-edge research.
            </Typography> */}
            <br></br>
            <Box sx={{ display: 'flex', gap: 1 }}>
            <Link href="https://www.facebook.com/IITRoorkee.ICC/" color="inherit" display="block" sx={{ mb: 1 }}>
                <FacebookIcon />
            </Link>
            <Link href="https://x.com/iitroorkee" color="inherit" display="block" sx={{ mb: 1 }}>
                <TwitterIcon />
            </Link>
            <Link href=" https://www.linkedin.com/school/indian-institute-of-technology-roorkee/
            " color="inherit" display="block" sx={{ mb: 1 }}>
                <LinkedInIcon/>
            </Link>
           
              {/* <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton> */}
              {/* <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton> */}
              {/* <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton> */}
            </Box>
          </Grid>

          <Grid component="div" item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/about" color="inherit" display="block" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link href="/faculty" color="inherit" display="block" sx={{ mb: 1 }}>
              Faculty
            </Link>
            <Link href="/research" color="inherit" display="block" sx={{ mb: 1 }}>
              Research
            </Link>
            <Link href="/events" color="inherit" display="block" sx={{ mb: 1 }}>
              Events
            </Link>
            <Link href="/contact" color="inherit" display="block" sx={{ mb: 1 }}>
              Contact
            </Link>
          </Grid>

          <Grid component="div" item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
              Department of Physics,
            <br></br>
Indian Institute of Technology Roorkee,
<br></br>
Roorkee-247667, Uttarakhand, India

              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
              +91-1332-284348
              <br></br>
              +91-1332-285248</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
              physics_office@iitr.ac.in</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Physics Association, IIT Roorkee. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 