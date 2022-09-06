import React from 'react';
import './TaskInput.css';
const TaskInput = ({ taskHandler, inputLoad }) => {

    return (
        <section>
            <form className='task-input-main' onSubmit={taskHandler}>
                <div className='input-field'>
                    <input type="text" name='task' placeholder='Write your task ...' />
                </div>
                <div className='input-button'>
                    <button>{inputLoad ? 'Loading..' : "Add"}</button>
                </div>
            </form>
        </section>
    );
};

export default TaskInput;

