// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#64b5f6', // Bleu clair
        },
        secondary: {
            main: '#81c784', // Vert clair
        },
        error: {
            main: '#e57373', // Rouge clair
        },
        warning: {
            main: '#ffb74d', // Orange clair
        },
        background: {
            default: '#f5f5f5', // Gris clair
        },
        custom: {
            darkBlue: '#42a5f5',
            darkerBlue: '#1e88e5',
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