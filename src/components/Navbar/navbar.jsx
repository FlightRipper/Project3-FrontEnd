import { useState,useEffect } from "react"
import "./navbar.css"
import logo from "../../assets/Logo.png"
import subscribe from "../../assets/subscribe.png"
import donate from '../../assets/heart.png'
import Subscribe from "../Subscribe/subscribe"
import ContactUs from "../ContactUs/contactUs.jsx"
import { Link } from "react-router-dom";
import Donation from "../Donation/donation.jsx"

const Navbar = () =>{
    const [showSubscription,setShowSubscription]= useState(false);
    const [showContactUs, setShowContactUs]= useState(false);
    const [activeLink,setActiveLink]= useState("Home");
    const [showMenu,setShowMenu] =useState(false);
    const [showDonationModel, setShowDonationModel]= useState(false);

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
        setShowDonationModel(false);
      }

    const handleShowDonation = () => {
      setShowDonationModel(!showDonationModel);
      document.querySelector('.overlay').style.display = 'block';
  
    };

  const handleHideDonation = () =>{
      document.querySelector('.overlay').style.display = 'none';
      setShowDonationModel(false);
  }


    return(
<header className="navbar-header">
    <div className="header-section">
        <Link onClick={()=> setActiveLink("Home")} className={(activeLink=='Home')?'active-link':''} to="Home"><img src={logo} alt="logo-TPLL" className="header-logo"/></Link>
        <div className="header-btns">
                <img src={subscribe} alt="subscribe to newsletter" />
            </button>
            <button className="header-donate-btn">
                Donate
                <svg height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path></svg>
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
    {showDonationModel ? <Donation onHide={handleHideDonation} /> : null}

</header>
    );
}

export default Navbar;