import React, {useContext , useState} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [userName,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({userName,password})

        setPassword('');
        setUsername('');
    }

  return (
    <div>
        <h2>Login Form</h2>
        <input type='text' value={userName} placeholder='Enter User Name' onChange={(e) => setUsername(e.target.value)}/>
        <input type='password' value={password} placeholder='Enter Passord' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login