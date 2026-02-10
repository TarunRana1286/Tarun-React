import { useCallback, useState } from "react"
///import './App.css'
import React from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator= useCallback(() => {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    let password = "";
    let allowedChars = char;
    if (numberAllowed) {
      allowedChars += num;
    }
    if (charAllowed) {
      allowedChars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i = 0; i <= length; i++) {
      password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length +1));
    }
    setPassword(password);
  }, [length, numberAllowed, charAllowed,setPassword])
  return (
    <>
    <div className="align-middle">
      <h1>Password Generator</h1>
      {/* <div className="password-display">
        <input type="text" value={password} readOnly />
        <button onClick={passwordGenerator}>Generate Password</button>
      </div> */}

      <div className='w-full bg-gray-900 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500'>
        <div className='flex shadow-md rounded-lg flex-col gap-4 py-4'>
          {/* <label htmlFor="length">Password Length:</label>
          <input type="number" id="length" value={length} onChange={(e) => setLength(e.target.value)} className='outline-none w-16 py-1 px-2 rounded-md text-gray-900' min={1} max={20} />
        </div>
        <div className='flex items-center gap-2 mb-4'>
          <input type="checkbox" id="numbers" checked={numberAllowed} onChange={(e) => setNumberAllowed(e.target.checked)} />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className='flex items-center gap-2 mb-4'>
          <input type="checkbox" id="characters" checked={charAllowed} onChange={(e) => setCharAllowed(e.target.checked)} />
          <label htmlFor="characters">Include Special Characters</label>
         */}
        <input type="text" value={password} className='outline-none w-full py-1 px-3 text-align-center' placeholder="Password" readOnly />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
        <button onClick={passwordGenerator}>Generate Password</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
