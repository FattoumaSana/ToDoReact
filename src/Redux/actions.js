export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: {
        id: Date.now(),
        description,
        isDone: false,
    },
});

export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: id,
});

export const editTask = (id, newDescription) => ({
    type: 'EDIT_TASK',
    payload: { id, newDescription },
});

export const filterTasks = (status) => ({
    type: 'FILTER_TASKS',
    payload: status,
});

export const clearCompletedTasks = () => ({
    type: 'CLEAR_COMPLETED_TASKS',
});

export const clearTasks = () => ({
    type: 'CLEAR_TASKS',
});