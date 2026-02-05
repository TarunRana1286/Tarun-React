import './App.css'
import { useState } from "react"
import React from "react"

function App() {
 
  const [color, setColor] = useState("white");

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center" style={{ backgroundColor: color }}>
        <h1 className="text-3xl mb-4">Background Color Changer</h1>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setColor("lightblue")}
          >
            Light Blue
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => setColor("lightgreen")}
          >
            Light Green
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded"
            onClick={() => setColor("lightyellow")}
          >
            Light Yellow
          </button>
        </div>
      </div>    
    </>
  )
}

export default App
