import { useEffect } from "react";
import Post from "../Post";
import { useState } from "react";
import { UserContext } from "../Usercontext";
import { useContext } from "react";

export default function Indexpage(){

    const{userinfo}=useContext(UserContext);
    
  console.log("user info is",userinfo);

    const[posts,setPosts]=useState([]);
  useEffect(()=>{
   fetch('http://localhost:2000/post').then(res=>{
       res.json().then(posts=>{
           
setPosts(posts);
       })
   })


  },[userinfo])

  if(userinfo===null||userinfo===''){
    window.location.reload();
 }
console.log("posts are",posts);

    return(
        <>  
        {

            posts?(posts.map(per=>{
               return  <Post key={per._id} title={per.title} summary={per.summary}  create_at={per.createdAt} _id={per._id} cover={per.cover} author={per.author}/>


            })):(
                <>
  <Post title="no data is fetched" summary="no data is fetched from db" />
                </>
            )
        }
     
      
        </>
    )
}