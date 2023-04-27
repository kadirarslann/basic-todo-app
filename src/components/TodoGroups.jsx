import TodoGroupBuilder from "./TodoGroupBuilder";
import { useContext, useState } from "react";
import todoContextVal from "../context/TodoContext";
import TodoGroup from "./TodoGroup";

function TodoGroups({ })
{
  const { todoGroups, deleteTodoGroup, setActiveGroup, activeGroup,editTodoGroup } = useContext(todoContextVal);
  return (
    <div className="min-w-min m-1">
      <div className="h-24 sm:h-fit overflow-scroll overflow-x-hidden sm:overflow-hidden">
      {todoGroups.map((group) => (
        <TodoGroup  key={group.id} group={group} setActiveGroup={setActiveGroup} activeGroup={activeGroup} deleteTodoGroup = {deleteTodoGroup} editTodoGroup={editTodoGroup}></TodoGroup>
      ))}
      </div>
    

      <TodoGroupBuilder>

      </TodoGroupBuilder>
    </div>
  );
}


export default TodoGroups;
