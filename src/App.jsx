import { useState, useEffect, useContext } from 'react';
import TodoGroups from './components/TodoGroups';
import Todos from './components/Todos';
import { TodoContext } from './context/TodoContext';
import './App.css';

function App()
{
  // useEffect(() =>
  // {

  // }, []);
  return (
    <>
      <div id="App" className="h-screen font-mono">
        <TodoContext>
          <div className="w-1/5  h-full bg-violet-900 " >
            <TodoGroups ></TodoGroups>
          </div>
          <div className="w-4/5  h-full bg-white">
            <Todos ></Todos>
          </div>
        </TodoContext>
      </div>

    </>
  );
}

export default App;
