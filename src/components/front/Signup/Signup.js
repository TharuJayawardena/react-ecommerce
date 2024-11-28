import Reac,{useState} from 'react';
import "./Signup.css";

// import key from '././image/download9.jpg'
// import email from '././image/download9.jpg'

const Signup = () => {

    const [action, setAction] = useState("Sign Up");

    return(
        <div className='container'>
              <div className='heading'>
                <div className='text'>
                  {action}
                </div>
                <div className='underline'></div>
              </div>
            <div className='inputs'>
                {action === "Login"?<div></div>: <div className='input'>
                 <img src="./image/person.png" alt="" /> 
                <input type="text" placeholder='Name' />
              </div>}
             
            </div>
            <div className='inputs'>
              <div className='input'>
                <img src="./image/email.png" alt="" /> 
                <input type="email" placeholder='Email' />
              </div>
            </div>
            <div className='inputs'>
              <div className='input'>
                <img src="./image/password.png" alt="" /> 
                <input type="password" placeholder='Password' />
              </div>
              {action === "Sign Up"?<div></div>: <div className='forgot-password'>Lost Password? 
                <span>Click Here!</span>
              </div>
             }
             
              <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"}onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={() => {setAction("Login")}}>Login</div>
              </div>
            </div>
        </div>
    )
}

export default Signup