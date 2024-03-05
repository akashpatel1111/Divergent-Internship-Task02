import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Loginn from './Loginn';
function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [flag, setFlag] = useState(false);
const [login, setLogin] = useState(true);

function handleSubmit(e){
  e.preventDefault();

  if(!name || !email || !password ){
    setFlag(true);


  }
  else{
    setFlag(false);
    localStorage.setItem("Email",JSON.stringify(email))
    localStorage.setItem("Password",JSON.stringify(password))
    console.log("Saved in local storage")
    setLogin(!login);
  }
  

}
function handleClick(){
  setLogin(!login)

}

  return (
    <div>
  {login ? (
        <form onSubmit={handleSubmit}>
             <h1>Sign Up</h1>
             <div className='from-group'>

                <label>Name</label>
                <input type="text" className='form-control' placeholder='Enter your Name' onChange={(event)=> setName(event.target.value)} />
             </div>

             <div className='from-group'>

                <label>Email</label>
                <input type="Email" className='form-control' placeholder='Enter your Email' onChange={(event)=> setEmail(event.target.value)}/>
             </div>

            <div className='from-group'>

                <label>Password</label>
                <input type="Password" className='form-control' placeholder='Enter Password' onChange={(event)=> setPassword(event.target.value)} />
             </div>

             <div className='from-group'>

                <label>Confirm Password</label>
                <input type="Password" className='form-control' placeholder='Confirm Password'  />
             </div>
             <button type='submit' className='btn btn-dark btn-lg btn-block'>Sign Up</button>
             <p onClick={handleClick}>Already Register Login</p>


             {flag && (
              <Alert color='primary' variant='danger'>Please fill every field</Alert>
             )}
            


        </form>
    ):(
        <Loginn/>
        )}
    </div>
  )
}

export default Register