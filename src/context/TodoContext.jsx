import { createContext, useEffect, useState } from 'react';
import db from '../config/firebaseconfig.js'
import { collection, doc, getDoc, getDocs ,query,setDoc,addDoc,deleteDoc, updateDoc,where} from "firebase/firestore";
const todoContextVal = createContext(null);
export default todoContextVal;

export function TodoContext({ children })
{
    const [todoGroups, setTodoGroups] = useState([]);
    const [todoItems, setTodoItems] = useState([]);
    const [activeGroup, setActiveGroup] = useState(null);

    useEffect(() =>
    {
        fetchTodoGroups()
    }, []);

    
    useEffect(() =>
    {
        fetchTodos()
    }, [activeGroup]);
    // useEffect(() =>
    // {

    // });
    const fetchTodoGroups = async ()=>{
            const todoGroupsQuery = query(collection(db, "todoGroups"));
            const todoGroups = await getDocs(todoGroupsQuery);
            setTodoGroups(todoGroups.docs)
            setActiveGroup(todoGroups.docs[0]);
    }
    const fetchTodos = async ()=>{
        let todos = await getDocs(query(collection(db, "todos"), where("groupId", "==", activeGroup.id)))
        console.log(todos.docs)
        
        // activeGroup != null && fetch(`http://localhost:3000/todos/${activeGroup.id}`).then(res => res.json()).then(res =>
        // {
        //     setTodoItems(res.todos);
        // });
    }
    const addTodoGroup = async (name) =>
    {
        const newDoc = await addDoc(collection(db, "todoGroups"), {
           name
          });
        const newDocSnapshot = await getDoc(doc(db,"todoGroups",newDoc.id))
        setTodoGroups(n =>[...n,newDocSnapshot])
    };
    const deleteTodoGroup = async (group) =>
    {
        let result = await deleteDoc(group.ref);
        setTodoGroups(prev=>{
            return prev.filter((item)=>{
                return group.id != item.id
            })
        })
    };
    const editTodoGroup = async(group,updateObj)=>{
        await updateDoc(group.ref,updateObj)
        let updatedDoc = await  getDoc(group.ref)
        setTodoGroups(prev=>{
            return prev.map((item)=>{
                return group.id != item.id ? item : updatedDoc
            })
        })
    }   
    const AddTodo = async()=>{
        
    }
   
  

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
                activeGroup
            }}>
                {children}

            </todoContextVal.Provider>
        </>

    );
}


