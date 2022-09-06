import React from 'react';
import { draggingOver } from '../../utility/Drag_Drop';
import '../Home/Common.css';
const TaskBoard = ({ dragDropped, board_id, title, children }) => {

    // const dragDropped = (e, status) => {
    //     console.log("you have drop");
    //     let transferToDoId = e.dataTransfer.getData('todoId');
    //     console.log(status, transferToDoId);

    //     fetch()

    // };

    return (
        <section className='main-section'
            droppable='true' onDragOver={(e) => draggingOver(e)}
            onDrop={(e) => dragDropped(e, board_id)}
        >

            <div className='title'>
                <h2>{title}</h2>
            </div>
            {children}
        </section>
    );
};

export default TaskBoard;