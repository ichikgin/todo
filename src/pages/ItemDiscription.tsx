import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { iToDo } from "../models/todo-items";

interface ComponentProps {
  todos: iToDo[];
}
const ItemDiscription = ({ todos }: ComponentProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<iToDo>();
  useEffect(() => {
    const searchTodo = todos.find((todo: iToDo) => id === todo.id + "");
    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate("/404");
    }
  }, [id, navigate, todos]);
  return (
    <div className="container">
      <Helmet>
        <title>{`Задача №${todo?.id}`}</title>
      </Helmet>
      <h1>{todo?.text}</h1>
      <Link to="/">To home</Link>
    </div>
  );
};

export default ItemDiscription;
