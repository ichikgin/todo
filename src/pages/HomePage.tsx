import { Helmet } from 'react-helmet-async';

import ListItem from "../components/ListItem/ListItem";
import { iToDo } from "../models/todo-items";

const HomePage = (props: { todos: iToDo[] }) => {
  return (
    <div className="container">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      {props.todos.map((todo: iToDo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default HomePage;
