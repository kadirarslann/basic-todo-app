import TodoGroupBuilder from "./TodoGroupBuilder";
import { useContext, useState } from "react";
import todoContextVal from "../context/TodoContext";
import TodoGroup from "./TodoGroup";

function TodoGroups({ })
{
  const { todoGroups, deleteTodoGroup, setActiveGroup, activeGroup,editTodoGroup } = useContext(todoContextVal);
  return (
    <div >
      {todoGroups.map((group) => (
        <TodoGroup key={group.id} group={group} setActiveGroup={setActiveGroup} activeGroup={activeGroup} deleteTodoGroup = {deleteTodoGroup} editTodoGroup={editTodoGroup}></TodoGroup>
      ))}

      <TodoGroupBuilder>

      </TodoGroupBuilder>
    </div>
  );
}


export default TodoGroups;
