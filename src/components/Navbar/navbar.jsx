import { useState } from "react"
import "./navbar.css"
import logo from "../../assets/Logo.png"
import subscribe from "../../assets/subscribe.png"
import donate from '../../assets/heart.png'
import Subscribe from "../Subscribe/subscribe"
import ContactUs from "../ContactUs/contactUs.jsx"
import { Link } from "react-router-dom";

const Navbar = () =>{
    const [showSubscription,setShowSubscription]= useState(false);
    const [showContactUs, setShowContactUs]= useState(false);
    const [activeLink,setActiveLink]= useState("Home");
    const [showMenu,setShowMenu] =useState(false);
    const handelMenu = () =>{
        setShowMenu(true);
    }
    const handelHideMenu=()=>{
        setShowMenu(false);
    }
    console.log(activeLink);

    const handleShowContact = (e) =>{
        e.preventDefault();
        setShowContactUs(!showContactUs);
        document.querySelector('.overlay').style.display = 'block';
    }
    const handleHideContact = () =>{
        document.querySelector('.overlay').style.display = 'none';
        setShowContactUs(false);
    }

    const handleShowSubscription = () =>{
        setShowSubscription(!showSubscription);
        document.querySelector('.overlay').style.display = 'block';
    }
    const handleHideSubscription = () =>{
        document.querySelector('.overlay').style.display = 'none';
        setShowSubscription(false);
    }
    const handleCloseOverlay = () => {
        document.querySelector('.overlay').style.display = 'none';
        setShowContactUs(false);
        setShowSubscription(false);
      }
    return(
<header className="navbar-header">
    <div className="header-section">
        <Link onClick={()=> setActiveLink("Home")} className={(activeLink=='Home')?'active-link':''} to="Home"><img src={logo} alt="logo-TPLL" className="header-logo"/></Link>
        <div className="header-btns">
            <button onClick={handleShowSubscription} className="header-subscribe-btn place-items-center">
                <img src={subscribe} alt="subscribe to newsletter" />
                <p>Join our newsletter</p>
            </button>
            <button className="header-donate-btn place-items-center">
                <img src={donate} alt="donate-heart"/>
                <p>Donate</p>
            </button>
        </div>
    </div>
    <div className="header-section">
        <div className="nav-items">
            <ul>
                <li ><Link onClick={()=> setActiveLink("Home")} className={(activeLink=='Home')?'active-link':''} to="Home">Home</Link></li>
                <li ><Link onClick={()=> setActiveLink("AboutUs")} className={(activeLink=='AboutUs')?'active-link':''} to="aboutus" >About Us</Link></li>
                <li ><Link onClick={()=> setActiveLink("News")} className={(activeLink=='News')?'active-link':''} to="news" >News</Link></li>
                <li className="dropdown" ><Link onClick={()=> setActiveLink("LebneneEle")} className={` ${(activeLink=='LebneneEle')?'active-link':''}`} to="lebnenele" >Lebnene Ele 
                <div className="dropdown-content">
                            <a href="#ourStory">Our Story</a>
                            <a href="#milestones">Milestones</a>
                            <a href="#library">From Our Library to Yours</a>
                         </div>
                </Link>
                
                    </li>
                    
                <li ><Link onClick={handleShowContact} to="#" >Contact Us</Link></li>
            </ul>
        </div>
        <input type="text" placeholder="search..." className="header-search-bar"/>
    </div>
    <div className="overlay" onClick={handleCloseOverlay}></div>
    {showSubscription?<Subscribe onHide={handleHideSubscription}/>:null}
    {showContactUs?<ContactUs onHide={handleHideContact}/>:null}


</header>
    );
}

export default Navbar;