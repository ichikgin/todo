import ToDoListItem from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'

const ToDoList = () => {
  return (
    <div className="todo-container">
        <ul className="todo-list failed">
            <ToDoListItem value = 'Первая задача' cheked />
        </ul>
        <ul className="todo-list completed">
            <ToDoListItem value = 'Вторая задача' />
        </ul>
    </div>
  )
}

export default ToDoList