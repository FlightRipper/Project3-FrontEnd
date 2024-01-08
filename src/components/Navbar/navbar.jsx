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

  const handleShowContact = (e) => {
    e.preventDefault();
    setShowContactUs(!showContactUs);
    document.querySelector('.overlay').style.display = 'block';
  }

  const handleHideContact = () => {
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
          {/* <button className="header-subscribe-btn place-items-center">
                <img src={subscribe} alt="subscribe to newsletter" />
                <p></p>
            </button> */}
            <button class="continue-application" onClick={handleShowSubscription}>
                Join our newsletter
            </button>
            <button className="header-donate-btn" onClick={handleShowDonation}>
                Donate
            </button>

        </div>
      </div>
      <div className="header-section">
        <div className="nav-items">
          <ul>
            <li ><Link onClick={() => setActiveLink("Home")} className={(activeLink === 'Home') ? 'active-link' : ''} to="Home">Home</Link></li>
            <li ><Link onClick={() => setActiveLink("AboutUs")} className={(activeLink === 'AboutUs') ? 'active-link' : ''} to="aboutus" >About Us</Link></li>
            <li ><Link onClick={() => setActiveLink("News")} className={(activeLink === 'News') ? 'active-link' : ''} to="news" >News</Link></li>
            <li className="dropdown" ><Link onClick={() => { }} className={` ${(activeLink === 'LebneneEle') ? 'active-link' : ''}`} to="#" >Lebnene Ele
                <div className="dropdown-content">
                <Link to="/lebnenele" onClick={() => handleItemClick("ourStory")}>Our Story</Link>
                <Link to="/lebnenele" onClick={() => handleItemClick("Milestones")}>Milestones</Link>
                <Link to="/lebnenele" onClick={() => handleItemClick("Library")}>From Our Library to Yours</Link>
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
