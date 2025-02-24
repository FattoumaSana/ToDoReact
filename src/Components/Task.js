import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../Redux/actions';

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);

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
        <div>
            <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
            {isEditing ? (
                <input
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                />
            ) : (
                <span>{task.description}</span>
            )}
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </div>
    );
};

export default Task;