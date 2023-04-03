import { createContext, useEffect, useState } from 'react';

const todoContextVal = createContext(null);
export default todoContextVal;

export function TodoContext({ children })
{
    const [todoGroups, setTodoGroups] = useState([]);
    const [todoItems, setTodoItems] = useState([]);
    const [activeGroup, setActiveGroup] = useState(null);
    



    useEffect(() =>
    {
        fetch("http://localhost:3000/todo-groups").then(res => res.json()).then(res =>
        {
            setTodoGroups(res);
            setActiveGroup(res[0])
        });
    }, []);
    useEffect(() =>
    {
        activeGroup != null && fetch(`http://localhost:3000/todos/${activeGroup.id}`).then(res => res.json()).then(res =>
        {
            setTodoItems(res.todos);
        });
    }, [activeGroup]);
    // useEffect(() =>
    // {
        
    // });

    const addTodoGroup = (name) =>
    {
        fetch("http://localhost:3000/todo-groups", {
            method: "POST",
            body: JSON.stringify({ "name": "assasas" }),
            headers: {
                "Content-Type": "application/json",

            },
        }).then(res => res.json()).then(res =>
        {
            setTodoGroups(n=>{
                return [...n,res]
            })    
        });
    };
    const deleteTodoGroup = (id) =>
    {
        fetch(`http://localhost:3000/todo-groups/${id}`, {
            method: "DELETE",
           
        }).then(res => res.json()).then(res =>
        {
            setTodoGroups(n=>{

                return n.filter(group=>group.id != id)
            })    
        });
    };
    const editTodoGroup = () =>
    {

    };


    return (
        <>
            <todoContextVal.Provider value={{
                "level": 30,
                todoGroups,
                addTodoGroup,
                deleteTodoGroup,
                editTodoGroup,
                setActiveGroup,
                todoItems
            }}>
                {children}

            </todoContextVal.Provider>
        </>

    );
}


