import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../../store";
import { FormWrapper, FormBlock, FormInput, FormLabel, FormButton } from "./Form.styled";
import { saveAction } from "../../features/form";
import plusIcon from './../../assets/images/plus.png'
import { createAction } from "../../features/todoList";

const Form = () => {
  const form = useSelector((state: RootState) => state.formValue.value);
  const dispatch = useDispatch();

  const createNewToDo = (form: string): void => {
    dispatch(createAction(form));
    toast("Новая задача в списке!", {
      position: "bottom-right",
      autoClose: 1000,
    });
  };

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form) createNewToDo(form);
    dispatch(saveAction(""));
  };

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormInput
            type="text"
            value={form}
            onChange={(e) => {
              dispatch(saveAction(e.target.value));
            }}
          />
          <FormButton icon = {plusIcon}></FormButton>
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};

export default Form;
