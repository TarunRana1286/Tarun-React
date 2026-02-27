import { useState } from 'react'
import './App.css'
import React from 'react'
import { TodoProvider } from './context/todocontext'
function App() {
const [todo, setTodo] = useState([])

const addTodos = (todo) => {
  setTodo((prev => [{id:Date.now(),...todo},...prev]))
}

const updateTodo = (id,title,completed) => {
  setTodo(todo.map((t)=>t.id === id ? {...t,title,completed}:t))
}

  return (
    <TodoProvider value={{
        todos:todo,
        addTodo:(newTodo)=>{
            setTodo([...todo,newTodo])
        },
        updateTodo:(id,title,completed)=>{
            setTodo(todo.map((t)=>t.id === id ? {...t,title,completed}:t))
        },
        deleteTodo:(id)=>{
            setTodo(todo.filter((t)=>t.id !== id)) },
        todoCompleted:(id)=>{
            setTodo(todo.map((t)=>t.id === id ? {...t,completed:!t.completed}:t))
        },
    }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
