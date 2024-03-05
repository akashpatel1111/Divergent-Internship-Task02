import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home';

function Loginn() {

const [emaillog , setEmaillog] = useState("");
const [passswordlog , setPasswordlog] = useState("");
const [flag , setFlag] = useState(false);
const [home , sethome] = useState(true);

function handleLogin(e){
  e.preventDefault();
  let mail = localStorage.getItem("Email").replace(/"/g,"");
  let pass = localStorage.getItem("Password").replace(/"/g,"");

  if(!emaillog || !passswordlog){
    setFlag(true);
    console.log("Empty");

  }
  else if(passswordlog !== pass || emaillog !== mail){
    setFlag(true)
  }
  else{
    sethome(!home);
    setFlag(false);
  }
  


}


  return (
    <div>
{home ? (

      <form onSubmit={handleLogin}>
       <h1>Login</h1>
       <div className='from-group'>

                <label>Email</label>
                <input type="Email" className='form-control' placeholder='Enter your Email' onChange={(event)=> setEmaillog(event.target.value)}/>
             </div>

            <div className='from-group'>

                <label>Password</label>
                <input type="Password" className='form-control' placeholder='Enter Password' onChange={(event)=> setPasswordlog(event.target.value)} />
             </div>
             <button type='submit' className='btn btn-dark btn-lg btn-block'>Login</button>

             {flag && (
              <Alert color='primary' variant='danger'>Please fill correct information</Alert>
             )}

      </form>
       ):(
        <Home/>
        )}
    </div>
  )
}

export default Loginn