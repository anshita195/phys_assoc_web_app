import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ScienceIcon from '@mui/icons-material/Science';
import { ThemeToggle } from './ThemeToggle';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Faculty', path: '/faculty' },
  { title: 'Research', path: '/research' },
  { title: 'Events', path: '/events' },
  { title: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(8px)',
        backgroundImage: theme.palette.mode === 'dark' 
          ? 'linear-gradient(rgba(36, 40, 48, 0.95), rgba(36, 40, 48, 0.95))'
          : 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <ScienceIcon 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              mr: 1,
              color: 'primary.main',
              fontSize: 32,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'primary.light',
              },
            }} 
          />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'primary.light',
              },
            }}
          >
            Physics Association, IIT Roorkee
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: 'background.paper',
                  mt: 1.5,
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.title} 
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  <Typography textAlign="center" color="text.primary">
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <ScienceIcon 
            sx={{ 
              display: { xs: 'flex', md: 'none' }, 
              mr: 1,
              color: 'primary.main',
              fontSize: 28,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'primary.light',
              },
            }} 
          />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'primary.light',
              },
            }}
          >
            Physics
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'text.primary',
                  display: 'block',
                  mx: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                    color: 'primary.main',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
            <ThemeToggle />
          </Box>

          {/* Mobile Theme Toggle */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 