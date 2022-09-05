import React from 'react';
import '../Common.css';
import { draggingOver, dragDropped, dragStarted } from '../../../utility/Drag_Drop';
const TaskDone = ({ tasks }) => {
    return (
        <section className='main-section' droppable='true' onDragOver={(e) => draggingOver(e)} onDrop={(e) => dragDropped(e)}>
            <div className='title'>
                <h2>Done</h2>
            </div>
            <div className='task-main-body' >
                {
                    tasks.map((task) => <div key={task._id} draggable onDragStart={(e) => dragStarted(e, task._id)} className='task'>
                        <p className='task-text'>{task.task}</p>
                        <p className='task-time'>{task.time}</p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default TaskDone;