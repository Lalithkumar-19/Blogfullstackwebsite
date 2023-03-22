import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

function RegisterPage() {
  const navigate=useNavigate();

    const [username,setUsername]=useState("");
    const [password ,setPassword]=useState("");
    
  console.log(username);
  console.log(password);



  



 async function register(e){
      e.preventDefault();

        
     const  response= await fetch('http://localhost:2000/register',{
          method:"POST",
          body:JSON.stringify({username,password}),
          headers:{'Content-Type':'application/json'},
      });
      if(response.status===200){
        alert("registartion succeed")
        navigate("/");


      }
      else{
        alert("registration failed ! User name may be exist ")

      }

  }





  return (
<main>  

<form  className='register'>
        <h2> Register</h2>
        <label> UserName:</label>
       
        <input type='text' 
        placeholder='Username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        
        
        />
        <label > Password:
        </label>
        <input type='password' 
        placeholder='Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        
        />
    
        
        <button type='submit' onClick={register} > Register</button>
        </form>
       
    

</main>

    )
}

export default RegisterPage