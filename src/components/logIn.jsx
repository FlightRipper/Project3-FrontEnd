import { useState } from 'react';
import './subscribe.css'
import './contactUs.css'
// eslint-disable-next-line react/prop-types
const SignIn = ({onHide}) =>{
   
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
   
    const [UserNameBackground, setUserNameBackground]= useState("white");
    const [passwordBackground, setPasswordBackground]= useState("white");
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    const handleUserNameInput = (e) =>{
          setUserName(e.target.value);
    }
    const handleUserPassword = (e) =>{
        setPassword(e.target.value);
  }
    const handleFormValidation = () =>{
        if(userName ==""){
            setUserNameBackground("notValid");
        }else{
            setUserNameBackground("white")
        }
        if(password==""){
            setPasswordBackground("notValid");
        }else{
            setPasswordBackground("white")
        }
    }
    return(
        <div className="subscribe-popup">
           <header className="popup-header">
            <button onClick={onHide} className='close-popup-btn'>
            <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      fill: "none",
      height: 16,
      width: 16,
      stroke: "currentcolor",
      strokeWidth: 3,
      overflow: "visible"
    }}
  >
    <path d="m6 6 20 20" />
    <path d="m26 6-20 20" /> </svg>
            </button>
            <h1 className='popup-title'>Sign In</h1>
           </header>
           <div className="popup-body">
            <label htmlFor="username">Username</label>
            <input type="text" value={userName} className={`popup-input ${UserNameBackground} `} placeholder='user name' onChange={handleUserNameInput}  autoFocus/>
            <label htmlFor="text">Password</label>
            <input type="text" value={password} className={`popup-input ${passwordBackground} `} placeholder='Password' onChange={handleUserPassword}/>

          
                <button onClick={handleFormValidation}  className="popup-send-btn">Sign In</button>
           </div>
        </div>
    );
}
export default SignIn;