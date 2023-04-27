import { useState, useEffect, useContext } from 'react';
import TodoGroups from './components/TodoGroups';
import Todos from './components/Todos';
import { TodoContext } from './context/TodoContext';
import './App.css';


function App()
{
  return (
    <>
      <div id="App" className="h-screen font-mono block sm:flex h-full">
        <TodoContext>
          <div className="todoGroups  w-full  sm:w-60    " >
            <TodoGroups ></TodoGroups>
          </div>
          <div className="todoItems w-full ">
            <Todos ></Todos>
          </div>
        </TodoContext>
      </div>

    </>
  );
}

export default App;
