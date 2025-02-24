import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks, clearTasks, clearCompletedTasks } from '../Redux/actions';
import { Button, Container, Typography, Box, Grid,  } from '@mui/material';
import theme from '../theme/theme';
import { useTransition, animated } from 'react-spring';

const ListTask = () => {
    const tasks = useSelector((state) => {
        switch (state.filter) {
            case 'DONE':
                return state.tasks.filter((task) => task.isDone);
            case 'UNDONE':
                return state.tasks.filter((task) => !task.isDone);
            default:
                return state.tasks;
        }
    });
    const dispatch = useDispatch();

    const handleFilter = (status) => {
        dispatch(filterTasks(status));
    };

    const handleClearTasks = () => {
        dispatch(clearTasks());
    };

    const handleClearCompletedTasks = () => {
        dispatch(clearCompletedTasks());
    };

    const validTasks = tasks.filter(task => task && task.id);

    const transitions = useTransition(validTasks, {
        keys: task => task.id,
        from: { opacity: 0, transform: 'translateY(-20px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(-20px)' },
    });

    try {
        return (
            <Container maxWidth="md" sx={{ mt: 4, p: 3, borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h5" gutterBottom>Liste des Tâches</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 1,
                        marginBottom: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={() => handleFilter('ALL')}
                        sx={{ backgroundColor: theme.palette.custom?.darkBlue || '#456EBF' }}
                    >
                        Toutes
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => handleFilter('DONE')}
                        sx={{ backgroundColor: theme.palette.secondary.main }}
                    >
                        Terminées
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => handleFilter('UNDONE')}
                        sx={{ backgroundColor: theme.palette.primary.main }}
                    >
                        En cours
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleClearCompletedTasks}
                        sx={{ backgroundColor: theme.palette.warning.main }}
                    >
                        Effacer tâches terminées
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleClearTasks}
                        sx={{ backgroundColor: theme.palette.error.main }}
                    >
                        Effacer tout
                    </Button>
                </Box>
                <Grid container spacing={2}>
                    {transitions((style, item) => (
                        <Grid item xs={12} key={item.id}>
                            <animated.div style={style}>
                                <Task task={item} />
                            </animated.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    } catch (error) {
        console.error("Erreur dans ListTask :", error);
        return <p>Une erreur s'est produite dans ListTask.</p>;
    }
};

export default ListTask;