import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'


const LoginSignup = () => {
  
const [action,setAction] = useState("Login")
    return (
        <div className='container'>
            <div className="header">
                <div className="text">
                    {action}
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
               {action==="login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>} 
                

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='password' />
                </div>
            </div>

  {action==="Sign Up"?<div></div>: <div className="forget-password">
                Lost Password ? <span>Click Here</span>
            </div>}          
           
            <div className="submit-container">
                <div className={action==="login"?"submit white":"submit"} onClick={()=>{setAction("Sign up")}}>
                 Sign Up   
                </div>
                <div className={action==="Sign Up"?"submit purple ":"submit"} onClick={()=>{setAction("Login")}}>
                 Log IN  
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
