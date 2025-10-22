import { Helmet } from "react-helmet-async";

import ListItem from "../components/ListItem/ListItem";
import { iToDo } from "../models/todo-items";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ViewList = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  return (
    <div className="container">
      <Helmet>
        <title>Список задач</title>
      </Helmet>
      {todoList.map((todo: iToDo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ViewList;
