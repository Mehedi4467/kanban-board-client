import React from 'react';
import { dragStarted } from '../../utility/Drag_Drop';
import '../Home/Common.css';
const TaskCard = ({ tasks }) => {

    return (
        <div className='task-main-body' >
            {
                tasks.map((task) => <div key={task._id} draggable onDragStart={(e) => dragStarted(e, task._id)} className='task'>
                    <p className='task-text'>{task.task}</p>
                    <p className='task-time'>{task.time}</p>
                </div>)
            }
        </div>
    );
};

export default TaskCard;