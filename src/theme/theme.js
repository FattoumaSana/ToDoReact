import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Couleur principale (bleu par défaut)
    },
    secondary: {
      main: '#dc004e', // Couleur secondaire (rose par défaut)
    },
    background: {
      default: '#f4f6f8', // Couleur de fond par défaut
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    // Personnalisez d'autres styles de texte si nécessaire
  },
  spacing: 8, // Unité de base pour les espacements (8px par défaut)
});

export default theme;