import React from 'react';
import { draggingOver, dragDropped } from '../../utility/Drag_Drop';
import '../Home/Common.css';
const TaskBoard = (props) => {

    return (
        <section className='main-section'
            droppable='true' onDragOver={(e) => draggingOver(e)}
            onDrop={(e) => dragDropped(e, props.board_id)}
        >

            <div className='title'>
                <h2>{props.title}</h2>
            </div>
            {props.children}
        </section>
    );
};

export default TaskBoard;