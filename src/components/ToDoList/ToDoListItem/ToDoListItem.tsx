
import './ToDoListItem.scss'
const ToDoListItem = (props: {value: string, cheked?:Boolean}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.value}</span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash"></button>
        <button className={`btn-${props.cheked? 'check':'uncheck'}`}></button>
      </div>
    </li>
  );
};

export default ToDoListItem;
