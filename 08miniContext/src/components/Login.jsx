import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" placeholder='Username' value={user} onChange={(e) => setUser(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button>Login</button>
    </div>
  )
}

export default Login