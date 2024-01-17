import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, removeTask, updateTaskStatusAsync } from '../../slices/todoListSlice';

import AddTask from './AddTask';
import RadioFilter from './RadioFilter';
import './css/TodoList.css';
import 'bootstrap/dist/css/bootstrap.css';

function TodoList() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.todoList.tasks);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch, tasks])

    const deleteTaskHandler = (taskId) => {
        dispatch(removeTask(taskId));
    }

    const toggleTaskStatus = (taskId, task, currentStatus) => {
        const newStatus = currentStatus === 'completed' ? 'new' : 'completed';
        dispatch(updateTaskStatusAsync({ id: taskId, task: task, status: newStatus }));
    };

    return (
        <div className='toDoList'>
            <AddTask />
            <RadioFilter setFilter={setFilter} />
            <div className='list'>
                <div className='tasks'>
                    {tasks.length === 0 ? (
                        <p>The list is empty. Add a task.</p>
                    ) : (
                        tasks
                            .filter(task => {
                                if (filter === 'all') {
                                    return true;
                                } else if (filter === 'new') {
                                    return task.status === 'new';
                                } else if (filter === 'completed') {
                                    return task.status === 'completed';
                                }
                                return true;
                            })
                            .map(task => (
                                <div key={task._id}>
                                    <ul>
                                        <li className={task.status}>
                                            <input
                                                className="form-check-input me-1"
                                                type="checkbox"
                                                value=""
                                                onChange={() => toggleTaskStatus(task._id, task.task, task.status)}
                                                checked={task.status === "completed"}
                                            />
                                            {task.task}
                                            <button onClick={() => deleteTaskHandler(task._id)} className='btn-close'></button>
                                        </li>
                                        <hr />
                                    </ul>
                                </div>
                            ))
                    )}
                </div>
            </div>
        </div>

    );
}

export default TodoList;
