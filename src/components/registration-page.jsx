import { useState } from 'react';
import googleicon from "../assets/google.png"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../components/firebase.jsx';
import './subscribe.css'
import './contactUs.css'
// eslint-disable-next-line react/prop-types
const Registration = ({onHide}) =>{
    const [email,setEmail]= useState('');
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [EmailBackground, setEmailBackground]= useState("white");
    const [UserNameBackground, setUserNameBackground]= useState("white");
    const [passwordBackground, setPasswordBackground]= useState("white");
    const auth = getAuth(app);
console.log("auth done")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleEmailInput = (e) =>{
        setEmail(e.target.value);
    }
    const handleUserNameInput = (e) =>{
          setUserName(e.target.value);
    }
    const handleUserPassword = (e) =>{
        setPassword(e.target.value);
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
        if(password==""){
            setPasswordBackground("notValid");
        }else{
            setPasswordBackground("white")
        }
        registerWithEmailAndPassword();
    }
    const registerWithEmailAndPassword = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth,userName, email, password);
          const user = userCredential.user;
          console.log('User registered successfully:', user);
          // You can add additional logic here (e.g., redirect the user)
        } catch (error) {
          console.error('Error during registration:', error.message);
        }
      };
    
      const registerWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
    
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          console.log('User signed in with Google:', user);
          // You can add additional logic here (e.g., redirect the user)
        } catch (error) {
          console.error('Error during Google Sign-In:', error.message);
        }
      };
   
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
            <h1 className='popup-title'>Sign Up</h1>
           </header>
           <div className="popup-body">
            <label htmlFor="username">Username</label>
            <input type="text" value={userName} className={`popup-input ${UserNameBackground} `} placeholder='user name' onChange={handleUserNameInput}  autoFocus/>
            <label htmlFor="email">Email</label>
            <input type="text" value={email} className={`popup-input ${EmailBackground} `} placeholder='Email' onChange={handleEmailInput}/>
            <label htmlFor="text">Password</label>
            <input type="text" value={password} className={`popup-input ${passwordBackground} `} placeholder='Password' onChange={handleUserPassword}/>

          
                <button onClick={handleFormValidation}  className="popup-send-btn">Sign Up</button>
                <h3>OR</h3>
                <button onClick={registerWithGoogle}><img src={googleicon} alt="google icon" style={{ width: '100px', height: '60px' }}/>Sign up with Google</button>


           </div>
        </div>
    );
}
export default Registration;