import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
     <h1>Tarun Project</h1>
    </UserContextProvider>
  )
}

export default App
