import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../slices/todoListSlice';

function AddTask() {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    const addTaskHandler = () => {
        if (task.trim() !== '') {
            dispatch(addTask({
                task,
                status: 'new',
            }));
            setTask('');
        }
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            addTaskHandler();
        }
    }

    return (
        <div className="input-group">
            <input
                type='text'
                className="form-control"
                placeholder="What you need to do?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={addTaskHandler} className="btn btn-outline-secondary" type="submit">Add note</button>
        </div>
    )
}
export default AddTask
