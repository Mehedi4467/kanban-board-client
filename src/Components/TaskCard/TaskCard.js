import React from 'react';
import { dragStarted } from '../../utility/Drag_Drop';
import '../Home/Common.css';
const TaskCard = ({ tasks }) => {


    return (
        <div className='task-main-body' >
            {
                tasks.map((task) => <div key={task._id} draggable onDragStart={(e) => dragStarted(e, task._id)} className='task'>

                    <div>
                        {
                            task.status === 'in-progress' ? <i className="color fa-solid fa-spinner"></i> : task.status === 'done' ? <i className="color far fa-check-circle"></i> : ''
                        }


                        <p className='task-text'>{task.task}</p>
                    </div>

                    <p className='task-time'>{task.created_on}</p>
                </div>)
            }
        </div>
    );
};

export default TaskCard;