import { useState } from "react"
import './App.css'
import React from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <>
      <h1>Password Generator</h1>
    </>
  )
}

export default App
