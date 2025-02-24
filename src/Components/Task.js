import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../Redux/actions';
import { Checkbox, TextField, Button, Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import theme from '../theme/theme'; 

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleEdit = () => {
        if (isEditing) {
            dispatch(editTask(task.id, editedDescription));
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                marginBottom: 2,
                backgroundColor: theme.palette.background.default, // Utilisation de la couleur de fond du thème
                padding: 2,
                borderRadius: '8px',
            }}
        >
            <Checkbox checked={task.isDone} onChange={handleToggle} color="primary" />
            {isEditing ? (
                <TextField
                    fullWidth
                    variant="outlined"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    inputRef={inputRef}
                />
            ) : (
                <Typography
                    variant="body1"
                    sx={{
                        textDecoration: task.isDone ? 'line-through' : 'none',
                        flexGrow: 1,
                    }}
                >
                    {task.description}
                </Typography>
            )}
            <Button
                variant="contained"
                color="primary"
                startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
                onClick={handleEdit}
            >
                {isEditing ? 'Save' : 'Edit'}
            </Button>
        </Box>
    );
};

export default Task;