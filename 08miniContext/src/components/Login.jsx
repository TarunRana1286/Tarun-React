import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <button>Login</button>
    </div>
  )
}

export default Login