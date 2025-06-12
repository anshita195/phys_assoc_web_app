import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem('theme-mode');
    return (savedMode as ThemeMode) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#2C3E50',
        light: '#34495E',
        dark: '#1A252F',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#E74C3C',
        light: '#EC7063',
        dark: '#C0392B',
        contrastText: '#FFFFFF',
      },
      background: {
        default: mode === 'light' ? '#F5F6FA' : '#1A1D21',
        paper: mode === 'light' ? '#FFFFFF' : '#242830',
      },
      text: {
        primary: mode === 'light' ? '#2C3E50' : '#E4E6EB',
        secondary: mode === 'light' ? '#7F8C8D' : '#B0B3B8',
      },
      divider: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#FFFFFF' : '#242830',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#FFFFFF' : '#242830',
            boxShadow: mode === 'light' 
              ? '0px 4px 20px rgba(0,0,0,0.05)'
              : '0px 4px 20px rgba(0,0,0,0.2)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: mode === 'light' 
                ? 'rgba(44, 62, 80, 0.08)'
                : 'rgba(255, 255, 255, 0.08)',
            },
          },
        },
      },
    },
  });

  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 