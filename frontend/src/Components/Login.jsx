import React,{useState} from "react";
import NavBar from "./NavBar";
import './Login.css';
import {useNavigate} from 'react-router-dom';


function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

const login=(e)=>{

e.preventDefault();
const userData = {
    username: username,
    password: password
  };

  fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.message === 'Login successful') {
      navigate('/portal',{ state: { username } } ); // Navigate to /portal on successful login
    } else {
      setError(data.message); // Show error message
    }
  })
  .catch(error => {
    console.error('Error:', error);
    setError('An error occurred. Please try again.');
  });


};

    return (
        <>
        <NavBar/>
<div className="signup_main">
   
    <div className="imgholder"> <img id='credimg' src="https://kiitportal.kiituniversity.net/KIIT_logon/layout/branding-image.jpg"/></div>

               <form onSubmit={login}>

            <div className="input_main">
   
                
            <div className="input_fields">

              <span><b>Enter username</b><span id='uname'><input id='user' type='text' placeholder="enter in the given format : rollno.@kiit.ac.in" onChange={(e)=>setUsername(e.target.value)}/></span></span>
                <span id="pinput"><b>Enter password</b><span id='pwd'><input id='pw' type='password' onChange={(e)=>setPassword(e.target.value)}/></span></span>
            
            </div>
            
            <div className="button_fields">
                <span id='lgn_btn'><input type="submit" value="Login" id="login"/></span>
            </div>
         {error && <p className="error">{error}</p>}
            </div>

            </form>

        </div>


        </>
    )
}

export default Login;