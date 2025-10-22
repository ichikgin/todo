import { iToDo } from "../../models/todo-items";
import classes from "./ListItem.module.scss";
import { Link } from "react-router-dom";

const ListItem = ({ todo }: { todo: iToDo }) => {
  return (
    <Link
      className={`${classes.link} ${
        todo.isDone ? classes.done : classes.notDone
      }`}
<<<<<<< HEAD
      to={`${todo.id}`}
=======
      to={`list/${todo.id}`}
>>>>>>> b4578835f559752f58fc3de4a43b3a921fc5a06a
    >
      {todo.text}
    </Link>
  );
};

export default ListItem;
