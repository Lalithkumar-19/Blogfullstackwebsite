import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Usercontext";
import { useContext } from "react";
import  logo from "./blogin2.png";
import { useNavigate } from "react-router-dom";

const Header=()=>{
const{setUserinfo,userinfo}=useContext(UserContext);
const navigate=useNavigate();
  useEffect( ()=>{

    
    fetch('http://localhost:2000/profile',{
      credentials:'include',
    }).then(res=>{
      res.json().then(userinfo=>{
        setUserinfo(userinfo);
  
      })
    })
 
  },[]);

  function logout(){
    fetch("http://localhost:2000/logout",{
      credentials:'include',
      method:"POST",

    });
    setUserinfo(null);
    navigate('/')
     
  }

  



  const username=userinfo.username;
  return(


    <div className="header">
    <Link to="/">
      <img  style={{height:"50px",width:"180px", marginLeft:"20px"}} src={logo} alt="logo"/>
    </Link>
   
   
      {
        username?(

          <>
         
          <nav>
          <span> {username}</span>

            <Link to="/post"> create new post</Link>
            <a onClick={logout} style={{cursor:"pointer"}}> logout</a>
            </nav>
          </>
        


        )
        :(<>
        <nav>
   <span className="login-button">  <Link to={'/login'}>Login </Link></span>
          <Link to={"/register"}>Register</Link>
        </nav>
    
        </>

         
        )
      }
    

  </div>
  )



 }


 export default Header;