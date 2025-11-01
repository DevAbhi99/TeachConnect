import React, {useState} from "react";
import './Signup.css';
import NavBar from "./NavBar";
import {useNavigate} from 'react-router-dom';





function Signup(){

  


const [username, setUsername]=useState('');
const [password, setPassword]=useState('');
const [error, setError] = useState(''); // State to hold error messages
const navigate=useNavigate();

const signup=(e)=>{

    e.preventDefault();

//validation logic

    // Check for empty fields
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    // Validate username: must be exactly 7 digits
    const usernameRegex = /^\d{7}$/;
    if (!usernameRegex.test(username)) {
      setError('Username must be a 7-digit roll number.');
      return;
    }

    // Validate password: 6-30 characters, must contain at least one letter and one number
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@#$%^&+=!]{6,30}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be 6-30 characters long and contain both letters and numbers.');
      return;
    }

    // Clear any previous errors
    setError('');

const user=username+'@kiit.ac.in';
const pwd=password;

const userData={
    username:user,
    password:pwd
};

fetch('http://localhost:5000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(err => {
        throw new Error(err.message || 'Signup failed');
      });
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    // Navigate to portal on successful signup
    navigate('/portal',{ state: { username: user } });
  })
  .catch(error => {
    console.error('Error:', error);
    setError(error.message || 'An error occurred during signup. Please try again.');
  });


}


    return (
        <>
        <NavBar/>


        <div className="signup_main">
   
  

   <div className="imgholder"> <img id='credimg' src="https://kiitportal.kiituniversity.net/KIIT_logon/layout/branding-image.jpg"/></div>

        

           <div className="input_main">
  
               <form onSubmit={signup}>
           <div className="input_fields">

             <span><b>Enter Roll number</b><span id='uname'><input id='user' type='text' placeholder="Enter your 7 digit roll number" onChange={(e)=>setUsername(e.target.value)}/></span></span>
               <span id="pinput"><b>Enter password</b><span id='signupwd'><input id='pw' type='password' onChange={(e)=>setPassword(e.target.value)}/></span></span>
           
           </div>
           
           <div className="button_fields">
               <span id='lgn_btn'><input type='submit' id="login" value='Signup'/></span>
           </div>
 
           {error && <p className="error">{error}</p>}
           </form>

           <p id="loginroute">If you have already signed up, <a href="http://localhost:3000/login"><button id="loginclick">click here</button></a></p>

           </div>



       </div>

 
        
        </>
    )


}

export default Signup;