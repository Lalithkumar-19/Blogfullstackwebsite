import React from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';



function Post() {
const navigate=useNavigate();
const[title,setTitle]=useState('');
const [summary,setSummary]=useState('');
const [content,setContent]=useState('');
const [files,setFiles]=useState("");
const[redirect,setredirect]=useState(false);


async function  createpost(e){
    const data=new FormData();
    data.set('title',title);
    data.set("summary",summary);
    data.set("content",content);
    data.set("file",files[0])
     console.log("data in post",data);
    e.preventDefault();
const response= await fetch('http://localhost:2000/post',{
        method:"POST",
        body:data,
        credentials:"include",

    });
if(response.ok){
  setredirect(true);
}
else{
  setredirect(false);
}

}

if(redirect){
  navigate("/");
}

  return (
    <main>
        
     
        <form className='post' onSubmit={createpost}>
        <h2> Post Editor</h2>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' required/>
            <input type='summary'value={summary} onChange={(e)=>setSummary(e.target.value)} placeholder='Summary' required/>
            <input type='file'  onChange={(e)=>setFiles(e.target.files)} required/>
            <ReactQuill value={content} theme="snow" onChange={(newvalue=>setContent(newvalue))} />
                   <div className='posteditor_btn'>
                 <button style={{marginTop:"10px" }}>Create post</button>
                 </div>
        </form>
    </main>
  )
}

export default Post ;