import React from 'react';
import './TaskInput.css';
const TaskInput = ({ taskHandler }) => {

    return (
        <section>
            <form className='task-input-main' onSubmit={taskHandler}>
                <div className='input-field'>
                    <input type="text" name='task' placeholder='Write your task ...' />
                </div>
                <div className='input-button'>
                    <button>Add</button>
                </div>
            </form>
        </section>
    );
};

export default TaskInput;

