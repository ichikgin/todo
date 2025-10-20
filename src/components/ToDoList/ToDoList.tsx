import ToDoListItem from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { iToDo } from "../../models/todo-items";

const ToDoList = (props: {todos:iToDo[], deleteToDo: Function, updateToDo: Function}) => {
  
  const checkedList = () => {
    return props.todos
      .filter((el) => !el.isDone)
      .map((el) => <ToDoListItem toDoItem={el} key={el.id} deleteToDo = {props.deleteToDo} updateToDo = {props.updateToDo}/>);
  };
  const unCheckedList = () => {
    return props.todos
          .filter((el) => el.isDone)
          .map((el) => (
            <ToDoListItem toDoItem={el} key={el.id} deleteToDo = {props.deleteToDo} updateToDo = {props.updateToDo}/>
          ))
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">{checkedList()}</ul>
      <ul className="todo-list completed">
        {unCheckedList()}
      </ul>
    </div>
  );
};

export default ToDoList;
