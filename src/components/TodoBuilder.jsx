import React, { useContext, useState } from 'react';
import { FaPlus, FaSlash } from 'react-icons/fa';
import todoContextVal from "../context/TodoContext";
function TodoBuilder()
{
  const [showBuilder, setShowBuilder] = useState(false);
  const [builderData, setBuilderData] = useState({
    title: "",
    content: "",
    status: "",
  });
  const { AddTodo } = useContext(todoContextVal);
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

  return (<div className='m-5'>
    <div className=" flex justify-end">
      <div className="text text-white bg-amber-500 rounded-lg px-2 justify-center items-center text-xl 
         hover:cursor-pointer hover:bg-amber-400" onClick={() => { setShowBuilder(n => !n); }}>
        Add Todo
        {!showBuilder ?
          <FaPlus className='text-4xl text-white inline px-2'   ></FaPlus> :
          <FaSlash className='text-4xl text-white inline px-2'   ></FaSlash>
        }
      </div>
    </div>
    {showBuilder &&
      <div className="flex ">
        <div className="w-full h-full">

          <div className="flex ">
            <div >
              <div className='text-amber-500 text-xl'>Title</div>
              <div className="bg-slate-300  rounded-md hover:bg-slate-600 cursor-pointer ">
                <input name="title" type="text" className='p-1 w-full rounded-md' onInput={inputHandler} />
              </div>
            </div>
            <div className='px-4'>
              <div className='text-amber-500 text-xl'>State</div>

              <select name="status" className='p-1 rounded-md' id="" onInput={inputHandler}>
                <option className='bg-blue-200 :' value="added">new</option>
                <option className='bg-blue-200 :' value="In progress">progressing</option>
                <option className='bg-blue-200 :' value="Suspended">suspended</option>
                <option className='bg-blue-200 :' value="Done">done</option>
              </select>
            </div>


          </div>

          <div className=' text-xl text-amber-500 '>CONTENT</div>
          <div className='w-full h-44 bg-slate-300 hover:bg-slate-600 text-center rounded-2xl'>

            <textarea name="content" className="text-area h-full w-full p-1 rounded-2xl " onInput={inputHandler}>

            </textarea>
          </div>
          <div className="bg-amber-500 mt-5 rounded-2xl text-center text-2xl w-28 cursor-pointer text-white hover:bg-amber-400" onClick={() =>
          {
            AddTodo(builderData);
          }}>
            Add
          </div>
        </div>
      </div>

    }
    {showBuilder && <div className="border-2 border-solid border-orange-400 m-5 "></div>}

  </div>
  );



}

export default TodoBuilder;