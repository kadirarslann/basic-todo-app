import React, { useContext, useState } from 'react';
import todoContextVal from "../context/TodoContext"
function TodoBuilder()
{
  const [builderData, setBuilderData] = useState({
    title: "",
    content: "",
    status: "",
  });
  const {AddTodo} = useContext(todoContextVal)
  const inputHandler = (event)=>{
    setBuilderData(n=>{
      return {
        ...n,
        [event.target.name]:event.target.value
      }
    })
    // console.log(event)
    // console.log(event.target.name)
    // console.log(event.target.value)
  }
  // const 
  return (
    <div className='p-5 m-5 bg-slate-200 '>
      <div className="flex h-52">
        <div className="w-3/4 h-full">

          <div className='w-full h-44 bg-slate-300 hover:bg-slate-600 text-center'>
            <div className='text-green-400 text-sm'>content</div>
            <textarea  name="content" className="text-area h-full w-full " onInput={inputHandler}>

            </textarea>
          </div>

        </div>
        <div className="w-1/4 h-full  flex flex-col justify-start content-center text-center text-2xl leading-10 mx-2">
          <div className="bg-slate-300 m-2 rounded-md hover:bg-slate-600 cursor-pointer ">
            <div className='text-green-400 text-sm'>Title</div>
            <hr />
            <input name="title" type="text" className=' w-full ' onInput={inputHandler} />
          </div>
          <div className="bg-slate-300 m-2 rounded-md hover:bg-slate-600 cursor-pointer ">
            <div className='text-green-400 text-sm'>State</div>
            <hr />
            <select name="status" id="" onInput={inputHandler}>
              <option className='bg-blue-200 :' value="added">Added</option>
              <option className='bg-blue-200 :' value="In progress">In progress</option>
              <option className='bg-blue-200 :' value="Suspended">Suspended</option>
              <option className='bg-blue-200 :' value="Done">Done</option>
            </select>
          </div>
          <div className="bg-slate-300 m-2 rounded-md hover:bg-slate-600 cursor-pointer rounded-lg hover:text-white" onClick={()=>{
            AddTodo(builderData)
          }}>
              Add   
          </div>

        </div>
      </div>
    </div>
  );
}

export default TodoBuilder;