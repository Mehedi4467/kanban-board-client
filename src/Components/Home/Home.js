import React, { useEffect, useState } from 'react';
import TaskInput from './TaskInput.js/TaskInput';
import './Home.css';
import ToDo from './ToDo/ToDo';
import InProgress from './InProgress/InProgress';
import TaskDone from './TaskDone/TaskDone';
const Home = () => {
    const [tasks, setTask] = useState([]);
    useEffect(() => {
        fetch('task.json')
            .then(res => res.json())
            .then(data => {
                setTask(data);
            })
    }, [])
    // console.log(task)
    return (
        <div className='container'>
            <TaskInput></TaskInput>
            <div className='todo-section grid-container'>
                <ToDo tasks={tasks}></ToDo>
                <InProgress></InProgress>
                <TaskDone></TaskDone>
            </div>
        </div>


    );
};

export default Home;