import { useState } from 'react';
import './subscribe.css'
import './contactUs.css'
// eslint-disable-next-line react/prop-types
const ContactUs = ({onHide}) =>{
    const [email,setEmail]= useState('');
    const [userName,setUserName] = useState("");
    const [EmailBackground, setEmailBackground]= useState("white");
    const [UserNameBackground, setUserNameBackground]= useState("white");
    // const [MessageBackground, setMessageBackground]= useState("white");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleEmailInput = (e) =>{
        setEmail(e.target.value);
    }
    const handleUserNameInput = (e) =>{
          setUserName(e.target.value);
    }
    const handleFormValidation = () =>{
        if(email =="" || !emailRegex.test(email)){
            setEmailBackground("notValid");
        }else{
            setEmailBackground("white")
        }
        if(userName ==""){
            setUserNameBackground("notValid");
        }else{
            setUserNameBackground("white")
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
            <h1 className='popup-title'>Contact Us</h1>
           </header>
           <div className="popup-body">
            <label htmlFor="username">Full name</label>
            <input type="text" value={userName} className={`popup-input ${UserNameBackground} `} placeholder='user name' onChange={handleUserNameInput}  autoFocus/>
            <label htmlFor="email">Email</label>
            <input type="text" value={email} className={`popup-input ${EmailBackground} `} placeholder='Email' onChange={handleEmailInput}/>
            <label htmlFor="message">Message</label>
            <textarea rows={5} className={`popup-textarea `} >

            </textarea>
                <button onClick={handleFormValidation}  className="popup-send-btn">Send</button>
           </div>
        </div>
    );
}
export default ContactUs;