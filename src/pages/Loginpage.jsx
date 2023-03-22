import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import {useNavigate} from "react-router-dom";
import { UserContext } from '../Usercontext';
function Login() {
const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [password ,setPassword]=useState("");
    const [redirect,setRedirect]=useState(false);
    const {setUserinfo}=useContext(UserContext)

 async function login(e){
      e.preventDefault();
      
     const  response= await fetch('http://localhost:2000/login',{
          method:"POST",
          body:JSON.stringify({username,password}),
          headers:{'Content-Type':'application/json'},
          credentials:'include',
      });
    if(response.status===200){
        response.json().then(userinfo=>{
            setUserinfo(userinfo); 
            setRedirect(true);
        })
    }
    else{
 alert("wrong credentials entered!!");
    };

}
if(redirect){
    navigate("/");

}



  return (
<main>  

<form onSubmit={login} className='register'>
        <h2> Login</h2>
        <label> UserName:</label>
       
        <input type='text' 
        placeholder='Username'
        value={username}
        autoComplete={false}
        onChange={(e)=>setUsername(e.target.value)}
        
        
        />
        <label > Password:
        </label>
        <input type='password' 
        placeholder='Password'
        autoComplete={false}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        
        />

        
        <button type='submit' >Login</button>
        </form>

</main>

    )
}


export default Login;