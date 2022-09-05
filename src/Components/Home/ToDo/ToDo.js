import React from 'react';
import '../Common.css';
const ToDo = ({ tasks }) => {
    console.log(tasks)
    return (
        <section className='main-section'>
            <div className='title'>
                <h2>To Do</h2>
            </div>
            <div className='task-main-body'>
                {
                    tasks.map((task) => <div key={task._id} className='task'>
                        <p className='task-text'>{task.task}</p>
                        <p className='task-time'>{task.time}</p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ToDo;