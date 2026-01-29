import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react'
//import { createRoot }  from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp() {
  return <div> <h1>Hello Vite + React!</h1></div>;
}

const anotherElement =(
  <a href="https://google.com" target='_blanlk'>Visit Googluuu</a>
)

const reactElement = React.createElement('a',
  {
    href:"https://www.google.com",target:"_blank"
  },
  "Click me to visit Google Link"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  
  //anotherElement
  // <StrictMode>
  //   <MyApp />
  // </StrictMode>,
)
