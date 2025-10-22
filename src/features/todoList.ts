import { createSlice } from '@reduxjs/toolkit'
import { iToDo } from '../models/todo-items'

export interface TodoState {
  todos: iToDo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: ({todos}, {payload}) => {
       return{
        todos:[...todos, { id: todos.length + 1, text:payload, isDone: false }]
       };
      
    },
    deleteAction: ({todos}, {payload}) => ({
     todos: todos.filter((el) => el.id !== payload)
    }),
    updateAction: ({todos}, {payload}) => ({
      
      todos: todos.map((el) => (el.id === payload ? {...el, isDone: !el.isDone} : el))

    }),
  },
})

// Action creators are generated for each case reducer function
export const { createAction, deleteAction, updateAction } = todoSlice.actions

export default todoSlice.reducer