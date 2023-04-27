import TodoBuilder from './TodoBuilder';
import todoContextVal from '../context/TodoContext';
import { useContext } from 'react';
import TodoCard from './TodoCard';

function Todos()
{
  const { todoItems } = useContext(todoContextVal);

  return (
    <div className="">
      <TodoBuilder>

      </TodoBuilder>
      {!todoItems || todoItems.length == 0 ?
        (
          <div className='m-3 text-7xl'>
            no todo here
          </div>
        )
        :
        <div id="todo-container" className='flex m-3 flex-wrap'>
          {todoItems && todoItems.map((todo) =>
          {
            return (
              <TodoCard key={todo.id} todo={todo}></TodoCard>
            );
          })}
         
        </div>
      }


    </div>

  );
}

export default Todos;