<<<<<<< HEAD

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
=======
import { useState } from 'react'
import './Form.scss'

const Form = (props:{createNewToDo: Function}) => {
  const [text, setText] = useState<string>('')
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text) props.createNewToDo(text)
    setText('')  
>>>>>>> b4578835f559752f58fc3de4a43b3a921fc5a06a
  }
 
  return (
    <div className="form-wrapper">
        <form action="#" onSubmit={formSubmit}>
            <label>
<<<<<<< HEAD
                <input type="text" value= {form} onChange={(e) => {
                  
                  dispatch(saveAction(e.target.value))}
=======
                <input type="text" value= {text} onChange={(e) => {
                  
                  setText(e.target.value)}
>>>>>>> b4578835f559752f58fc3de4a43b3a921fc5a06a
                  }/>
                <button></button>
            </label>
        </form>
    </div>
  )
}

export default Form