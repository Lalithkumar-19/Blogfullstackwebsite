import Layout from './Layout';
import {Route,Routes} from"react-router-dom";
import Indexpage from './pages/Indexpage';
import Loginpage from './pages/Loginpage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './Usercontext';
import Post from './pages/Post';
import Postpage from './pages/Postpage';
import Loader from "./pages/Loaderpage";
import Editpage from './pages/Editpage';

function App() {
  return (

<UserContextProvider>
<Routes>
<Route index path='/' element={[<Layout/>,<Indexpage/>]  }/>
<Route path='/loader' element={< Loader/>}/>
<Route path='/login' element={[<Layout/>,<Loginpage/>]  }/>
<Route path='/register' element={[<Layout/>,<RegisterPage/>]  }/>

 <Route path='/post' element={<Post/>}/>
 
  <Route path="/post/:id" element={<Postpage/>}/>
  <Route path='edit/:id' element={<Editpage/>}/>
  <Route path='*' element={
<div>
 <center> <h1> page not found</h1></center>
</div>
  }/> 
</Routes>

</UserContextProvider>

   
  );
}

export default App;
