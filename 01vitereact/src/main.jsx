import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react'
//import { createRoot }  from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp() {
  return <div> <h1>Hello Vite + React!</h1></div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
