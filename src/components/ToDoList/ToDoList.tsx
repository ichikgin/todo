import ToDoListItem from "./ToDoListItem/ToDoListItem";

import { iToDo } from "../../models/todo-items";
import {TodoListFailed, TodoListCompleted, TodoBlock } from './ToDoList.styled'
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
    <TodoBlock >
      <TodoListFailed >{checkedList()}</TodoListFailed>
      <TodoListCompleted >
        {unCheckedList()}
      </TodoListCompleted>
    </TodoBlock>
  );
};

export default ToDoList;
