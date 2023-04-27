import React, { useContext, useState } from 'react';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import todoContextVal from '../context/TodoContext';
function TodoCard({ todo })
{
    const [editModeActive, setEditModeActive] = useState(false);
    const { deleteTodo, editTodo } = useContext(todoContextVal);
    const [builderData, setBuilderData] = useState({
        title: "",
        content: "",
        status: "",
    });
    const initBuilder = function(){
        setBuilderData({
            title:todo.data().title,
            content:todo.data().content,
            status:todo.data().status,
        })
    }
    const inputHandler = (event) =>
    {
        setBuilderData(n =>
        {
            return {
                ...n,
                [event.target.name]: event.target.value
            };
        });
    };
    return (
        <div className='todoCard  w-full xs:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 h-80  '>
            <div className=' m-2  p-2 relative'>
                {!editModeActive &&
                    <>
                        <div className="todo-states h-10 font-bold font-bold text-2xl p-1 leading-8 overflow-auto">
                            {todo.data().title}
                        </div>
                        <div className="todo-text h-52 break-words font-bold text-md overflow-auto">
                            {todo.data().content}
                        </div>
                        <div className="todo-states h-10 text-xl p-1 font-bold leading-8">
                            {todo.data().status}
                        </div>
                        <div className="todo_delete absolute right-0 top-2 p-2 text-xl cursor-pointer " onClick={() => { deleteTodo(todo); }}>
                            <FaTrash className='text-red-600'></FaTrash>
                        </div>
                        <div className="todo_delete absolute right-0 top-10 p-1 text-xl cursor-pointer ">
                            <FaEdit className='text-blue-600' onClick={() => { setEditModeActive(true); initBuilder(); }}></FaEdit>
                        </div>
                    </>
                }
                {editModeActive &&
                    <>
                        <div className="todo-states leading-8">
                            <input name="title" className="h-10 w-3/4 rounded-sm  font-bold text-2xl p-1 bg-transparent leading-8 overflow-auto"
                                value={builderData.title} onInput={(event) => { inputHandler(event); }} />

                        </div>
                        <div className="todo-text h-52 break-words overflow-auto my-1">
                            <textarea name="content" className="h-48 overflow-auto w-5/6 rounded-sm break-words font-bold text-md p-1 bg-transparent "
                                value={builderData.content} onInput={(event) => { inputHandler(event); }} />

                        </div>
                        <div className="todo-states h-10 text-xl p-1 leading-8">
                            <select name="status" className='p-1 rounded-md' id="" value={todo.status} onInput={(event) => { inputHandler(event); }}>
                                <option className='bg-blue-200 :' value="added">new</option>
                                <option className='bg-blue-200 :' value="In progress">progressing</option>
                                <option className='bg-blue-200 :' value="Suspended">suspended</option>
                                <option className='bg-blue-200 :' value="Done">done</option>
                            </select>
                        </div>
                        <div className="todo_delete absolute right-0 top-2 p-2 text-xl cursor-pointer " onClick={() => { deleteTodo(todo); }}>
                            <FaTrash className='text-red-600'></FaTrash>
                        </div>
                        <div className="todo_delete absolute right-0 top-10 p-1  text-xl cursor-pointer ">
                            <FaCheck className='hover:text-green-500 m-1 hover:cursor-pointer' onClick={() => { setEditModeActive(false); editTodo(todo,builderData) }}></FaCheck>
                        </div>
                    </>
                }

            </div>


        </div>
    );
}

export default TodoCard;