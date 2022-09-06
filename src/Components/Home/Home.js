import React from 'react';
import TaskInput from './TaskInput.js/TaskInput';
import './Home.css';
import TaskBoard from '../TaskBoard/TaskBoard';
import TaskCard from '../TaskCard/TaskCard';
import { useQuery } from '@tanstack/react-query';


const Home = () => {


    const { isLoading, data, refetch } = useQuery(['task'], () =>
        fetch(`http://localhost:5000/task`)
            .then(res => res.json())
    );

    const taskHandler = (e) => {
        e.preventDefault();
        const taskText = e.target.task.value;
        const taskInfo = { task: taskText, status: 'new' };
        fetch('http://localhost:5000/api/v1/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskInfo),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                e.target.reset()
            })

    }

    if (isLoading) {
        return <div>Processing.....</div>
    }
    const inProgress = data.filter(x => x.status === 'in-progress');
    const dones = data.filter(x => x.status === 'done');
    const tasks = data.filter(x => x.status === 'new');



    console.log(tasks)
    return (
        <div className='container'>
            <TaskInput taskHandler={taskHandler}></TaskInput>


            <div className='todo-section grid-container'>

                <TaskBoard title={'To Do'} board_id='new'>
                    <TaskCard tasks={tasks}></TaskCard>
                </TaskBoard>


                <TaskBoard title={'In Progress'} board_id='in-progress'>
                    <TaskCard tasks={inProgress}></TaskCard>
                </TaskBoard>


                <TaskBoard title={'Done'} board_id='done'>
                    <TaskCard tasks={dones}></TaskCard>
                </TaskBoard>
            </div>
        </div>
    );
};

export default Home;
