import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions';
import { TextField, Button, Box, Container, FormHelperText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import theme from '../theme/theme';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            dispatch(addTask(description));
            setDescription('');
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    gap: 2,
                    marginBottom: 4,
                }}
            >
                <TextField
                    fullWidth
                    label="Nouvelle tâche"
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    error={error}
                    InputProps={{
                        style: { backgroundColor: theme.palette.background.default },
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.main,
                        },
                    }}
                >
                    Ajouter
                </Button>
            </Box>
            {error && <FormHelperText error>La description ne peut pas être vide.</FormHelperText>}
        </Container>
    );
};

export default AddTask;