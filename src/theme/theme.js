// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#f4f6f8',
        },
        custom: {
            darkBlue: '#456EBF', // Ajout de darkBlue
            darkerBlue: '#435373', // Ajout de darkerBlue
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
    },
    spacing: 8,
});

export default theme;