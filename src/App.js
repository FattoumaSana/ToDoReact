import React from 'react';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { Box } from '@mui/material';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    minHeight: '100vh',
                    backgroundColor: theme.palette.background.default,
                    padding: 4,
                }}
            >
                <AddTask />
                <ListTask />
            </Box>
        </ThemeProvider>
    );
}

export default App;