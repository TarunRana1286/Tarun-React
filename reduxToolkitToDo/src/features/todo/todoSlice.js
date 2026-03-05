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
  }
});
