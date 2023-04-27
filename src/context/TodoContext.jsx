import { createContext, useEffect, useState } from 'react';
import db from '../config/firebaseconfig.js';
import { collection, doc, getDoc, getDocs, query, setDoc, addDoc, deleteDoc, updateDoc, where } from "firebase/firestore";
const todoContextVal = createContext(null);
export default todoContextVal;

export function TodoContext({ children })
{
    const [todoGroups, setTodoGroups] = useState([]);
    const [todoItems, setTodoItems] = useState([]);
    const [activeGroup, setActiveGroup] = useState(null);

    useEffect(() =>
    {
        fetchTodoGroups();
    }, []);


    useEffect(() =>
    {
        activeGroup && fetchTodos();
    }, [activeGroup]);


    const fetchTodoGroups = async () =>
    {
        const todoGroupsQuery = query(collection(db, "todoGroups"));
        const todoGroups = await getDocs(todoGroupsQuery);
        setTodoGroups(todoGroups.docs);
        setActiveGroup(todoGroups.docs[0]);
    };
    const fetchTodos = async () =>
    {
        let todos = await getDocs(query(collection(db, "todos"), where("groupId", "==", activeGroup.id)));
        setTodoItems(todos.docs);
        // console.log(todos.docs)
    };
    const addTodoGroup = async (name) =>
    {
        const newDoc = await addDoc(collection(db, "todoGroups"), {
            name
        });
        const newDocSnapshot = await getDoc(doc(db, "todoGroups", newDoc.id));
        setTodoGroups(n => [...n, newDocSnapshot]);
    };
    const deleteTodoGroup = async (group) =>
    {
        let result = await deleteDoc(group.ref);
        setTodoGroups(prev =>
        {
            return prev.filter((item) =>
            {
                return group.id != item.id;
            });
        });
    };
    const editTodoGroup = async (group, updateObj) =>
    {
        await updateDoc(group.ref, updateObj);
        let updatedDoc = await getDoc(group.ref);
        setTodoGroups(prev =>
        {
            return prev.map((item) =>
            {
                return group.id != item.id ? item : updatedDoc;
            });
        });
    };
    const AddTodo = async (todoObj) =>
    {
        const newDoc = await addDoc(collection(db, "todos"), { ...todoObj, groupId: activeGroup.id });
        const newDocSnapshot = await getDoc(doc(db, "todos", newDoc.id));
        setTodoItems(n => [...n, newDocSnapshot]);
    };
    const deleteTodo = async (todoItem) =>
    {
        const res = await deleteDoc(todoItem.ref);
        setTodoItems(n => n.filter(item => item.id != todoItem.id));
    };
    const editTodo = async (todoItem, data) =>
    {
        updateDoc(todoItem.ref, data);
        let updatedDoc = await getDoc(todoItem.ref);
        setTodoItems(prev =>
        {
            return prev.map((item) =>
            {
                return updatedDoc.id != item.id ? item : updatedDoc;
            });
        });
    };



    return (
        <>
            <todoContextVal.Provider value={{
                todoGroups,
                addTodoGroup,
                deleteTodoGroup,
                editTodoGroup,
                setActiveGroup,
                todoItems,
                AddTodo,
                activeGroup,
                deleteTodo,
                editTodo
            }}>
                {children}

            </todoContextVal.Provider>
        </>

    );
}


