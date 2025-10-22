import { iToDo } from "../../models/todo-items";
import classes from "./ListItem.module.scss";
import { Link } from "react-router-dom";

const ListItem = ({ todo }: { todo: iToDo }) => {
  return (
    <Link
      className={`${classes.link} ${
        todo.isDone ? classes.done : classes.notDone
      }`}
      to={`${todo.id}`}
    >
      {todo.text}
    </Link>
  );
};

export default ListItem;
