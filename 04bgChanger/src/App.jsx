import './App.css'
import { useState } from "react"
import React from "react"
function App() {

const [color, setColor] = useState("olive");
const changeColor = (newColor, message) => {
    setColor(newColor);
    alert(message);
  };
console.log("Current color state:", color);
  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
        minHeight: '100vh'
      }}
    >
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-6 py-3 rounded-full z-50">
        Current: {color}
      </div>
    <div className="w-full h-screen flex justify-center items-center"
  style={{ backgroundColor: color }}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl"> 
          <button onClick={() => changeColor("red", "Red color selected")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => changeColor("orange", "Orange color selected")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={() => changeColor("yellow", "Yellow color selected")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={() => changeColor("green", "Green color selected")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => changeColor("blue", "Blue color selected")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => changeColor("purple", "Purple color selected")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
          </div>  
     </div>  
    </div> 
    </div> 
  )
}

export default App
