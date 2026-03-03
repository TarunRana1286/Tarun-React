import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos: [
    { id: nanoid(), title: "Learn Redux Toolkit", completed: false },
    { id: nanoid(), title: "Build a to-do app", completed: false },
  ],
};
