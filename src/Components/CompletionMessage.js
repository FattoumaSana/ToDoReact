import React from 'react';
import { Box, Typography } from '@mui/material';

const CompletionMessage = ({ isVisible, message }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <Box sx={{ bgcolor: 'rgba(0, 255, 0, 0.1)', p: 1, borderRadius: '4px', mt: 2 }}>
    <Typography variant="caption">Excellent travail ! Objectif atteint, continue comme ça ! 🔥😎</Typography>
</Box>
    );
};

export default CompletionMessage;