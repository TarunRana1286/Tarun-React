import {useState} from 'react'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(1);
  ///let counter =7;

  const handleAdd = () => {
    setCounter(prev =>  prev + 1);
    setCounter(prev =>  prev + 1);
    setCounter(prev =>  prev + 1);
    setCounter(prev =>  prev + 1);


    // setCounter(prev => Math.min(20, prev + 1));
    // setCounter(prev => Math.min(20, prev + 1));
    // setCounter(prev => Math.min(20, prev + 1));
    // setCounter(prev => Math.min(20, prev + 1));

    //setCounter(counter + 1);
    ///console.log("Add button clicked", counter);
  }

  const handleRemove = () => {
    setCounter(prev => Math.max(0, prev - 1));
    //setCounter(counter - 1);
    ///console.log("Remove button clicked", counter);
  } 

  return (
    <>
      <h1>Tarun React Apppppp</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={handleAdd}>Add Value {counter}</button>
      <br />
      <button onClick={handleRemove}>Remove Value {counter}</button>
      <br />
      <footer>Footer : {counter}</footer>
    </>
  )
}

export default App
