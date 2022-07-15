import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        contacts: {
          items: [],
          filter: ''
        }
      }

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
      // return [...state, payload]
    },
    deleteTodo: (state, { payload }) => {
      //todo
      state.todos = state.todos.filter(({ id }) => id !== payload);
      // return state.filter(({ id }) => id !== payload);
    },
    editTodo: (state, { payload }) => {
      state.todos = state.todos.map(todo => {
        return todo.id === payload.id ? payload : todo;
      });
      // return state.map(todo => {
      //   return todo.id === payload.id ? payload : todo;
      // });
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;