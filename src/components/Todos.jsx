import TodoBuilder from './TodoBuilder'
import todoContextVal from '../context/TodoContext'
import { useContext } from 'react'
import TodoCard from './TodoCard';

function Todos() {
  const {todoItems} = useContext(todoContextVal)
  return (
    <div className="">
        <TodoBuilder>

        </TodoBuilder>
        <div className="border-8 border-solid border-orange-400 m-5"></div>
        <div id="todo-container" className='flex m-3'>
              {todoItems && todoItems.map((todo)=>{
                return (
                  <TodoCard key={todo.id} todo={todo}></TodoCard>
                  )
              })}
        </div>
       
    </div>
    
  )
}

export default Todos