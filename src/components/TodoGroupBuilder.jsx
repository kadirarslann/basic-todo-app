import { useState, useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import TodoContextVal from '../context/TodoContext';
function TodoGroupBuilder()
{
    const [name, setName] = useState("");
    const { addTodoGroup } = useContext(TodoContextVal);
    return (
        <div className='flex flex-auto'>
            <input className="w-full flex-grow mx-5 p-2  font-bold rounded-lg" type="text" value={name} onInput={(e) => { setName(e.target.value); }}
                placeholder='Add Todo Group' onKeyDown={(event) =>
                {
                    if (event.key === 'Enter')
                    {
                        addTodoGroup(name);
                    }
                }} />
            <div className="flex place-items-center mx-1">
                <FaPlus onClick={() =>
                {
                    addTodoGroup(name);
                }}
                    className='self-end flex text-xl h-full -translate-x-2 hover:text-green-500 text-white hover:-translate-y-0.5 cursor-pointer'></FaPlus>
            </div>

        </div>
    );
}

export default TodoGroupBuilder;