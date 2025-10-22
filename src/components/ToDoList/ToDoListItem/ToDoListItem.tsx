import {iToDo} from '../../../models/todo-items'
import './ToDoListItem.scss'
const ToDoListItem = (props: {toDoItem: iToDo, deleteToDo: Function, updateToDo: Function}) => {
 const  {text, isDone, id} = props.toDoItem
  return (
    <li  className="todo-list-item__wrapper">
      <span>{text}</span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash" onClick={() => props.deleteToDo(id)}></button>
        <button className={`btn-${isDone? 'check':'uncheck'}`} onClick = {() => props.updateToDo(id)}></button>
      </div>
    </li>
  );
};

export default ToDoListItem;
