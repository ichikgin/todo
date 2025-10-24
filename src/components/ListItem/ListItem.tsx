import { iToDo } from "../../models/todo-items";
import { Item } from "./ListItem.styled";

const ListItem = ({ todo }: { todo: iToDo }) => {
  return (
    <Item done={todo.isDone} to={`${todo.id}`}>
      {todo.text}
    </Item>
  );
};

export default ListItem;
