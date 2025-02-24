import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks, clearTasks, clearCompletedTasks } from '../Redux/actions';
import { Button, Container, Typography, Box } from '@mui/material';
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
            <Container maxWidth="md" style={{ marginTop: theme.spacing(4) }}>
                <Typography variant="h4" gutterBottom>
                    Liste des Tâches
                </Typography>
                <Box mb={2}>
                    <Button
                        variant="contained"
                        onClick={() => handleFilter('ALL')}
                        sx={{
                            marginRight: theme.spacing(1),
                            backgroundColor: theme.palette.custom?.darkBlue || '#456EBF', // Gestion de l'erreur
                            '&:hover': {
                                backgroundColor: theme.palette.custom?.darkerBlue || '#435373', // Gestion de l'erreur
                            },
                        }}
                    >
                        Toutes
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => handleFilter('DONE')}
                        sx={{
                            marginRight: theme.spacing(1),
                            backgroundColor: theme.palette.secondary.main,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                            },
                        }}
                    >
                        Terminées
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => handleFilter('UNDONE')}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main,
                            },
                        }}
                    >
                        En cours
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleClearTasks}
                        sx={{
                            backgroundColor: theme.palette.error.main,
                            '&:hover': {
                                backgroundColor: theme.palette.error.dark,
                            },
                        }}
                    >
                        Effacer tout
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleClearCompletedTasks}
                        sx={{
                            backgroundColor: theme.palette.warning.main,
                            '&:hover': {
                                backgroundColor: theme.palette.warning.dark,
                            },
                        }}
                    >
                        Effacer terminées
                    </Button>
                </Box>
                <Box>
                    {transitions((style, item) => (
                        <animated.div key={item.id} style={style}>
                            <Task task={item} />
                        </animated.div>
                    ))}
                </Box>
            </Container>
        );
    } catch (error) {
        console.error("Erreur dans ListTask :", error);
        return <p>Une erreur s'est produite dans ListTask.</p>;
    }
};

export default ListTask;