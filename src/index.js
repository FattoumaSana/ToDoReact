import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Importez ThemeProvider et createTheme
import store from './Redux/store';
import App from './App';

// Créez un thème personnalisé
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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Police par défaut
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}> {/* Enveloppez votre application avec ThemeProvider */}
      <App />
    </ThemeProvider>
  </Provider>
);