import React , {useState} from 'react';
// import {Redirect} from 'react-router-dom';
import { Navigate , useNavigate } from 'react-router-dom';

function Home(){
    const [auth, setauth] = useState(false);
    const navigate = useNavigate();
    if (auth) {
        return <Navigate to="/about" />
    } 
    return(
      <>  <center>Welcome to Homepage
        <div>
        <button onClick={()=>setauth(true)}>Login</button>
        <button onClick={()=>navigate('/help')}>Login</button>
        </div>
      </center></>
    );
}
export default Home;