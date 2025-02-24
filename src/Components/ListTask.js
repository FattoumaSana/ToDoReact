import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../Redux/actions';

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

    return (
        <div>
            <div>
                <button onClick={() => handleFilter('ALL')}>All</button>
                <button onClick={() => handleFilter('DONE')}>Done</button>
                <button onClick={() => handleFilter('UNDONE')}>Undone</button>
            </div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;