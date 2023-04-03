import React from 'react';

function TodoCard({ todo })
{
    return (
        <div className='todoCard w-60 h-80 bg-lime-100 p-2 m-2 '>
            <div className="todo-states">
                STATE
            </div>
            <div className="todo-title h-16">
                TİTLE
            </div>
            <div className="todo-text h-52">
                {todo.text}
            </div>

        </div>
    );
}

export default TodoCard;