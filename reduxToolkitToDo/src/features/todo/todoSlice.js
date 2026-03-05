import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos: [
    { id: nanoid(), title: "Learn Redux Toolkit", completed: false },
    { id: nanoid(), title: "Build a to-do app", completed: false },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, title } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
   toggleTodo: (state, action) => {
      const existingTodo = state.todos.find((todo) => todo.id === action.payload);
      if (existingTodo) {
        existingTodo.completed = !existingTodo.completed;
      }
    },
  }
});
