<<<<<<< HEAD

=======
import { useState } from "react";
>>>>>>> b4578835f559752f58fc3de4a43b3a921fc5a06a
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";

import Form from "../components/Form/Form";
import ToDoList from "../components/ToDoList/ToDoList";
<<<<<<< HEAD

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updateAction, deleteAction } from "../features/todoList";

 const ToDoListPage = () => {

  const todoList = useSelector((state: RootState) => state.todoList.todos )
  const dispatch = useDispatch()

  const updateToDo = (id: number) => {
    dispatch(updateAction(id))
    toast("Задача завершена!", { position: "bottom-right", autoClose: 1000 });
  };
  const deleteToDo = (id: number) => {
    dispatch(deleteAction(id))
=======
import { iToDo } from "../models/todo-items";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<iToDo[]>([]);

  const createNewToDo = (text: string): void => {
    setTodos([...todos, { id: todos.length - 1, text, isDone: false }]);
    toast("Новая задача в списке!", {
      position: "bottom-right",
      autoClose: 1000,
    });
  };
  const updateToDo = (id: number) => {
    setTodos(
      todos.map((el) => (el.id === id ? ((el.isDone = !el.isDone), el) : el))
    );
    toast("Задача завершена!", { position: "bottom-right", autoClose: 1000 });
  };
  const deleteToDo = (id: number) => {
    setTodos(todos.filter((el) => el.id !== id));
>>>>>>> b4578835f559752f58fc3de4a43b3a921fc5a06a
    toast("Задача удалена!", { position: "bottom-right", autoClose: 1000 });
  };
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Главная страница</title>
      </Helmet>
      <Form/>
      <ToDoList todos={todoList} deleteToDo={deleteToDo} updateToDo={updateToDo} />
=======
        <title>Список задач</title>
      </Helmet>
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} deleteToDo={deleteToDo} updateToDo={updateToDo} />
>>>>>>> b4578835f559752f58fc3de4a43b3a921fc5a06a
      <ToastContainer />
    </>
  );
};
<<<<<<< HEAD
export default ToDoListPage
=======
>>>>>>> b4578835f559752f58fc3de4a43b3a921fc5a06a
