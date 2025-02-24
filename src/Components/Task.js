import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../Redux/actions';
import { Box, Checkbox, TextField, Typography, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import theme from '../theme/theme';
import CompletionMessage from './CompletionMessage';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);
    const inputRef = useRef(null);
    const [showMessage, setShowMessage] = useState(false);
    const [completedTasksCount, setCompletedTasksCount] = useState(0);

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
        if (!task.isDone) {
            setCompletedTasksCount(completedTasksCount + 1);
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
        }
    };

    const handleEdit = () => {
        if (isEditing) {
            dispatch(editTask(task.id, editedDescription));
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    const getCompletionMessage = () => {
        switch (completedTasksCount) {
            case 1:
                return "Excellent travail ! Objectif atteint, continue comme ça ! 🔥😎";
            case 2:
                return "Encore un succès à ton actif ! Continue à briller ! ✨";
            case 3:
                return "Superbe performance ! En route vers de nouveaux sommets ! ⛰️";
            default:
                return "Top niveau ! Tu assures, ne lâche rien !";
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                marginBottom: 2,
                backgroundColor: theme.palette.background.default,
                padding: 2,
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Checkbox
                    checked={task.isDone}
                    onChange={handleToggle}
                    color="primary"
                    sx={{
                        color: theme.palette.primary.main,
                        '&.Mui-checked': {
                            color: theme.palette.primary.main,
                        },
                    }}
                />
                {task.isDone && <CheckCircleIcon color="success" />}
                {isEditing ? (
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        inputRef={inputRef}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: theme.palette.custom.darkBlue,
                                },
                                '&:hover fieldset': {
                                    borderColor: theme.palette.custom.darkerBlue,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: theme.palette.primary.main,
                                },
                            },
                        }}
                    />
                ) : (
                    <div style={{ flexGrow: 1 }}>
                        <Typography
                            variant="body2"
                            sx={{
                                textDecoration: task.isDone ? 'line-through' : 'none',
                                color: task.isDone ? theme.palette.custom.darkBlue : 'inherit',
                                wordBreak: 'break-word',
                                maxWidth: '100%',
                            }}
                        >
                            {task.description}
                        </Typography>
                    </div>
                )}
            </Box>
            {!task.isDone && (
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
                    onClick={handleEdit}
                    sx={{
                        backgroundColor: isEditing ? theme.palette.secondary.main : theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: isEditing ? theme.palette.primary.main : theme.palette.secondary.main,
                        },
                    }}
                >
                    {isEditing ? 'Save' : 'Edit'}
                </Button>
            )}
            <CompletionMessage isVisible={showMessage} message={getCompletionMessage()} />
        </Box>
    );
};

export default Task;