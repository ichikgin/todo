import { iToDo } from "../../../models/todo-items";
import {
  TodoItemButton,
  TodoItem,
  TodoItemControl,
  TodoSpan,
} from "./ToDoListItem.styled";
import check from "../../../assets/images/check.png";
import uncheck from "../../../assets/images/uncheck.png";
import trash from "../../../assets/images/trash.png";
const ToDoListItem = (props: {
  toDoItem: iToDo;
  deleteToDo: Function;
  updateToDo: Function;
}) => {
  const { text, isDone, id } = props.toDoItem;
  return (
    <TodoItem>
      <TodoSpan>{text}</TodoSpan>
      <TodoItemControl className="todo-list-item__buttons">
        <TodoItemButton icon={trash} onClick={() => props.deleteToDo(id)} />
        <TodoItemButton
          icon={isDone ? check : uncheck}
          onClick={() => props.updateToDo(id)}
        />
      </TodoItemControl>
    </TodoItem>
  );
};

export default ToDoListItem;
