import "./App.css";
import {format} from"date-fns";
import { Link } from "react-router-dom";

function Post({_id,title,summary,create_at,author,cover}){
  return(
<main>
    <div className='post'>
<Link to={`/post/${_id}`}>
<div className='image'>
<img src={'http://localhost:2000/'+cover}alt='hello'/>

</div>
</Link>

<div className='texts'>
<Link  style={{ textDecoration:"none"}} to={`/post/${_id}`}>
  <h2> {title} </h2>  
  </Link>

 <p className="info">  
  <a className='author' href='kjdj'>{author.username}</a>
  <time> { format(new Date(create_at),'MMM d,yyyy HH:mm')}</time>
 
 </p>
    <p className='summary'> {summary}</p>
</div>
</div>

</main>
)
}


export default Post;