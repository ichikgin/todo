
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import './Form.scss'
import { saveAction } from '../../features/form';
import { toast } from 'react-toastify';
import { createAction } from "../../features/todoList";

const Form = () => {

  const form = useSelector((state: RootState) => state.formValue.value);
  const dispatch = useDispatch()

  const createNewToDo = (form: string): void => {
     dispatch(createAction(form))
     toast("Новая задача в списке!", {
        position: "bottom-right",
        autoClose: 1000,
      })
    };

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form) createNewToDo(form)
    dispatch(saveAction(''))
  }
 
  return (
    <div className="form-wrapper">
        <form action="#" onSubmit={formSubmit}>
            <label>
                <input type="text" value= {form} onChange={(e) => {
                  
                  dispatch(saveAction(e.target.value))}
                  }/>
                <button></button>
            </label>
        </form>
    </div>
  )
}

export default Form