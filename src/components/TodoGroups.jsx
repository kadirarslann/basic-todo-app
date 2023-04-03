import TodoGroupBuilder from "./TodoGroupBuilder";
import { useContext } from "react";
import todoContextVal from "../context/TodoContext";
import {FaTrash} from 'react-icons/fa'

function TodoGroups({ })
{
  const {todoGroups,deleteTodoGroup,setActiveGroup} = useContext(todoContextVal)
  return (
    <div >
      {todoGroups.map((group) => (
        <div key={group.id} >
          <div className="text-xl font-bold bg-slate-500 text-red-50  p-5 m-5 rounded-lg flex flex-grow ">
            <div className="flex-grow hover:translate-x-1 cursor-pointer hover:text-cyan-400 px-1 " 
            onClick={()=>{setActiveGroup(group)}}> {group.name}</div>
           
          <div className="delete-icon self-end ">
              <FaTrash className="hover:text-red-600 hover:cursor-pointer" onClick={()=>{deleteTodoGroup(group.id)}}></FaTrash>
          </div>
          </div>
         
        </div>
      ))}
      
      <TodoGroupBuilder>
         
      </TodoGroupBuilder>
    </div>
  );
}


export default TodoGroups;
