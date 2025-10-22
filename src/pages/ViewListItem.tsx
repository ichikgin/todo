import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { iToDo } from "../models/todo-items";
import { useSelector } from "react-redux";
import { RootState } from "../store";


const ViewListItem = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<iToDo>();
  useEffect(() => {
    const searchTodo = todoList.find((todo: iToDo) => id === todo.id + "");
    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate("/404");
    }
  }, [id, navigate, todoList]);
  return (
    <div className="container">
      <Helmet>
        <title>{`Задача №${todo?.id? todo.id +1:0} `}</title>
      </Helmet>
      <h1>{todo?.text}</h1>
      <Link to="/list">Назад</Link>
    </div>
  );
};

export default ViewListItem;
