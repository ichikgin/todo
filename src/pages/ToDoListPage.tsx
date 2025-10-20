import { useState } from "react"
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/Header/Header"
import Form from "../components/Form/Form"
import ToDoList from "../components/ToDoList/ToDoList"
import { iToDo } from "../models/todo-items"


export const ToDoListPage = () => {
  const [todos,setTodos] = useState<iToDo[]>([])



  const createNewToDo =(text:string):void => {
    setTodos([...todos,{id: todos.length -1,
      text,
      isDone: false
    } ])
    toast('Новая задача в списке!',{ position: "bottom-right",autoClose: 1000  })
  }
  const updateToDo = (id:number) => {
    setTodos(todos.map(el => el.id === id?(el.isDone = !el.isDone, el): el))
    toast("Задача завершена!",{ position: "bottom-right",autoClose: 1000  })

  }
  const deleteToDo = (id:number) =>{
    setTodos(todos.filter(el => el.id !== id))
    toast("Задача удалена!",{ position: "bottom-right",autoClose: 1000  })
  }
  return (
    <>
    <Header/>
    <Form createNewToDo = {createNewToDo}/>
    <ToDoList todos = {todos} deleteToDo= {deleteToDo} updateToDo= {updateToDo}/>
    <ToastContainer />
    
    </>
  )
}

