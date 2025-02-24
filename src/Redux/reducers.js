const initialState = {
    tasks: [],
    filter: 'ALL', // 'ALL', 'DONE', 'UNDONE'
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, isDone: !task.isDone } : task
                ),
            };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                        ? { ...task, description: action.payload.newDescription }
                        : task
                ),
            };
        case 'FILTER_TASKS':
            return { ...state, filter: action.payload };
        case 'CLEAR_TASKS':
                return { ...state, tasks: [] };
        case 'CLEAR_COMPLETED_TASKS':
                return { ...state, tasks: state.tasks.filter((task) => !task.isDone) };
        default:
            return state;
    }
};

export default taskReducer;