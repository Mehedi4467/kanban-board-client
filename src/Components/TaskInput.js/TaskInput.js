import React from 'react';
import './TaskInput.css';
const TaskInput = () => {
    return (
        <div>
            <form className='task-input-main'>
                <div className='input-field'>
                    <input type="text" placeholder='Write your task ...' />
                </div>
                <div className='input-button'>
                    <button>Add</button>
                </div>
            </form>
        </div>
    );
};

export default TaskInput;
