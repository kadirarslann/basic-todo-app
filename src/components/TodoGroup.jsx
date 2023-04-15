import React, { useContext, useState, useEffect, useRef } from "react";
import todoContextVal from "../context/TodoContext";
import { FaTrash, FaPen, FaCheck } from 'react-icons/fa';


function TodoGroup({ group, setActiveGroup, activeGroup, deleteTodoGroup, editTodoGroup })
{
  const [editActive, setEditActive] = useState(false);
  const [groupName, setGroupName] = useState("");

  // const groupName = useRef(group.data().name) 
  return (
    <div  >
      <div className="text-xl font-bold bg-slate-500 text-red-50  p-5 m-5 rounded-lg flex flex-grow ">
        {!editActive && <div className={`flex-grow hover:translate-x-1 cursor-pointer hover:text-cyan-400 px-1 ${group.id == activeGroup.id ? 'text-cyan-400' : ''}`}
          onClick={() => { setActiveGroup(group); }}> {group.data().name}</div>}
        {editActive && <div>
          <input className='w-full bg-slate-300 border-red-500 text-black' type="text" value={groupName} onInput={(e) => { setGroupName(e.target.value); }} />
        </div>}


        <div className="delete-icon self-end flex">
          {editActive && <FaCheck className="hover:text-green-500 mx-2 hover:cursor-pointer" onClick={() =>
          {
            setEditActive(n => !n);
            editTodoGroup( group, {name: groupName });
          }}></FaCheck>}
          {!editActive && <FaPen className="hover:text-cyan-600 mx-2 hover:cursor-pointer" onClick={() =>
          {
            setEditActive(n => !n);
            setGroupName(group.data().name);
          }}></FaPen>}
          <FaTrash className="hover:text-red-600 hover:cursor-pointer" onClick={() => { deleteTodoGroup(group); }}></FaTrash>
        </div>
      </div>

    </div>
  );
}

export default TodoGroup;