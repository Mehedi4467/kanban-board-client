import React, { useEffect, useState } from 'react';
import TaskInput from './TaskInput.js/TaskInput';
import './Home.css';
import TaskBoard from '../TaskBoard/TaskBoard';
import TaskCard from '../TaskCard/TaskCard';


const Home = () => {
    const [tasks, setTask] = useState([]);
    const [progress, setProgress] = useState([]);
    const [done, setDone] = useState([]);
    useEffect(() => {
        fetch('task.json')
            .then(res => res.json())
            .then(data => {

                if (data) {
                    const inProgress = data.filter(x => x.status === 'in-progress');
                    setProgress(inProgress);
                }
                if (data) {
                    const dones = data.filter(x => x.status === 'done');
                    setDone(dones);
                }
                if (data) {
                    const tasks = data.filter(x => x.status === 'new');
                    setTask(tasks);
                }
            })
    }, [])
    console.log(tasks)
    return (
        <div className='container'>
            <TaskInput></TaskInput>


            <div className='todo-section grid-container'>

                <TaskBoard title={'To Do'} board_id='new'>
                    <TaskCard tasks={tasks}></TaskCard>
                </TaskBoard>


                <TaskBoard title={'In Progress'} board_id='in-progress'>
                    <TaskCard tasks={progress}></TaskCard>
                </TaskBoard>


                <TaskBoard title={'Done'} board_id='done'>
                    <TaskCard tasks={done}></TaskCard>
                </TaskBoard>
            </div>
        </div>
    );
};

export default Home;
