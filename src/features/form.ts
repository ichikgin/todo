import { createSlice } from '@reduxjs/toolkit'

export interface FormState {
  value: string
}

const initialState: FormState = {
  value: '',
}

export const formSlice = createSlice({
  name: 'formValue',
  initialState,
  reducers: {
    saveAction: ({value}, {payload}) => {
       return{
        value:payload
       };
      
    }
  }
    
})

// Action creators are generated for each case reducer function
export const { saveAction } = formSlice.actions

export default formSlice.reducer