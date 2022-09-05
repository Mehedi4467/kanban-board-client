import React from 'react';
import './TaskInput.css';
const TaskInput = () => {
    return (
        <section>
            <form className='task-input-main'>
                <div className='input-field'>
                    <input type="text" placeholder='Write your task ...' />
                </div>
                <div className='input-button'>
                    <button>Add</button>
                </div>
            </form>
        </section>
    );
};

export default TaskInput;

