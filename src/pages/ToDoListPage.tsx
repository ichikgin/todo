
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";

import Form from "../components/Form/Form";
import ToDoList from "../components/ToDoList/ToDoList";

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
    toast("Задача удалена!", { position: "bottom-right", autoClose: 1000 });
  };
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <Form/>
      <ToDoList todos={todoList} deleteToDo={deleteToDo} updateToDo={updateToDo} />
      <ToastContainer />
    </>
  );
};
export default ToDoListPage