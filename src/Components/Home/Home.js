import React, { useState } from 'react';
import TaskInput from './TaskInput.js/TaskInput';
import './Home.css';
import TaskBoard from '../TaskBoard/TaskBoard';
import TaskCard from '../TaskCard/TaskCard';
import { useQuery } from '@tanstack/react-query';


const Home = () => {

    const [inputLoad, setInputLoad] = useState(false)
    const { isLoading, data, refetch } = useQuery(['task'], () =>
        fetch(`http://localhost:5000/task`)
            .then(res => res.json())
    );

    const taskHandler = (e) => {
        setInputLoad(true);
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
                if (data.acknowledged) {
                    // console.log(data);
                    refetch();
                    e.target.reset();
                    setInputLoad(false)
                }

            })
    };

    const dragDropped = (e, status) => {
        let transferToDoId = e.dataTransfer.getData('todoId');
        fetch(`http://localhost:5000/api/vi/task/status/update/${transferToDoId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                }

            })

    };

    if (isLoading) {
        return <div>Loading.....</div>
    }
    const inProgress = data.filter(x => x.status === 'in-progress');
    const dones = data.filter(x => x.status === 'done');
    const tasks = data.filter(x => x.status === 'new');



    // console.log(tasks)
    return (
        <div className='container'>
            <TaskInput taskHandler={taskHandler} ></TaskInput>


            <div className='todo-section grid-container'>

                <TaskBoard title={'To Do'} dragDropped={dragDropped} board_id='new'>
                    <TaskCard tasks={tasks} inputLoad={inputLoad}></TaskCard>
                </TaskBoard>


                <TaskBoard title={'In Progress'} dragDropped={dragDropped} board_id='in-progress'>
                    <TaskCard tasks={inProgress}></TaskCard>
                </TaskBoard>


                <TaskBoard title={'Done'} dragDropped={dragDropped} board_id='done'>
                    <TaskCard tasks={dones}></TaskCard>
                </TaskBoard>
            </div>
        </div>
    );
};

export default Home;
