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

const usernameRegex = /^\d{7}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,30}$/;

    if (!usernameRegex.test(username)) {
      setError('Username must be a 7-digit number.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be 6-30 characters long and alphanumeric.');
      return;
    }

const user=username+'@kiit.ac.in';
const pwd=password;

const userData={
    username:user,
    password:pwd
};

fetch('http://localhost:5000/signup', {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    navigate('/portal',{ state: { username } });
  })
  .catch(error => {
    console.error('Error:', error);
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