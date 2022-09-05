import React from 'react';
import TaskInput from './TaskInput.js/TaskInput';
import './Home.css';
import ToDo from './ToDo/ToDo';
import InProgress from './InProgress/InProgress';
import TaskDone from './TaskDone/TaskDone';
const Home = () => {
    return (
        <div className='container'>
            <TaskInput></TaskInput>
            <div className='todo-section grid-container'>
                <ToDo></ToDo>
                <InProgress></InProgress>
                <TaskDone></TaskDone>
            </div>
        </div>


    );
};

export default Home;