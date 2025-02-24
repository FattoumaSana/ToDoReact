import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions';
import { TextField, Button, Box, Container, FormHelperText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import theme from '../theme/theme';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false); // Ajout d'un état pour l'erreur
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            dispatch(addTask(description));
            setDescription('');
            setError(false); // Réinitialiser l'erreur
        } else {
            setError(true); // Définir l'erreur si la description est vide
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
                    error={error} // Ajout de l'erreur
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                >
                    Ajouter
                </Button>
            </Box>
            {error && <FormHelperText error>La description ne peut pas être vide.</FormHelperText>}
        </Container>
    );
};

export default AddTask;