import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import ReactQuill from "react-quill";

function Editpage() {
     const {id}=useParams();
    const navigate=useNavigate();
    const[title,setTitle]=useState('');
    const [summary,setSummary]=useState('');
    const [content,setContent]=useState('');
    const [files,setFiles]=useState("");
    const[cover,setCover]=useState('');
    const[redirect,setredirect]=useState(false);
    

useEffect(
    ()=>{
        fetch('http://localhost:2000/post/'+id)
        .then(
            res=>{
                res.json().then(postinform=>{
                    setTitle(postinform.title);
                    setContent(postinform.title);
                    setSummary(postinform.summary);
                })
            }
        )
    },[]
)



async function updatepost(e){
    e.preventDefault();

    const data=new FormData();
    data.set('title',title);
    data.set("summary",summary);
    data.set("content",content);
    data.set("id",id);
    if(files?.[0]){
        data.set("file",files?.[0])
    }


 const response=  await fetch('http://localhost:2000/post',{
        method:"PUT",
        body:data,
        credentials:'include',
    });
    if(response.ok){
        setredirect(true)
    }
 

}



    
    if(redirect){
      navigate("/post/"+id);
    }
    
      return (
        <main>
            
         
            <form className='post' onSubmit={updatepost}>
            <h2> Post Editor</h2>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' required/>
                <input type='summary'value={summary} onChange={(e)=>setSummary(e.target.value)} placeholder='Summary' required/>
                <input type='file'  onChange={(e)=>setFiles(e.target.files)} required/>
                <ReactQuill value={content} theme="snow" onChange={(newvalue=>setContent(newvalue))} />
                       
                     <button style={{marginTop:"10px" }}>Update post</button>
                     
            </form>
        </main>
      
  )
}

export default Editpage