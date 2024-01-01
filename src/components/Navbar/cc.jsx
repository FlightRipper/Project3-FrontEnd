import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/Logo.png";
import donate from '../../assets/heart.png';
import Subscribe from "../Subscribe/subscribe";
import ContactUs from "../ContactUs/contactUs.jsx";
import Donation from "../Donation/donation.jsx"; // Import Donation component
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSubscription, setShowSubscription] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [showDonation, setShowDonation] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const handelMenu = () => {
    setShowMenu(true);
  }

  const handelHideMenu = () => {
    setShowMenu(false);
  }

  const handleShowContact = (e) => {
    e.preventDefault();
    setShowContactUs(!showContactUs);
    setShowDonation(false); // Close donation modal if open
    document.querySelector('.overlay').style.display = 'block';
  }

  const handleHideContact = () => {
    document.querySelector('.overlay').style.display = 'none';
    setShowContactUs(false);
  }

  const handleShowSubscription = () => {
    setShowSubscription(!showSubscription);
    setShowDonation(false); // Close donation modal if open
    document.querySelector('.overlay').style.display = 'block';
  }

  const handleHideSubscription = () => {
    document.querySelector('.overlay').style.display = 'none';
    setShowSubscription(false);
  }

  const handleShowDonation = () => {
    setShowDonation(true);
    document.querySelector('.overlay').style.display = 'block';
  }

  const handleCloseOverlay = () => {
    document.querySelector('.overlay').style.display = 'none';
    setShowContactUs(false);
    setShowSubscription(false);
    setShowDonation(false);
  }

  return (
    <header className="navbar-header">
      <div className="header-section">
        <Link onClick={() => setActiveLink("Home")} className={(activeLink === 'Home') ? 'active-link' : ''} to="Home"><img src={logo} alt="logo-TPLL" className="header-logo" /></Link>
        <div className="header-btns">
          <button class="continue-application" onClick={handleShowSubscription}>
            <div>
              <div class="pencil"></div>
              <div class="folder">
                <div class="top">
                  <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                  </svg>
                </div>
                <div class="paper"></div>
              </div>
            </div>
            Join our newsletter
          </button>
          <button onClick={handleShowDonation} className="header-donate-btn">
            Donate
            <svg height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
            </svg>
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
        <input type="text" placeholder="search..." className="header-search-bar" />
      </div>
      <div className="overlay" onClick={handleCloseOverlay}></div>
      {showSubscription ? <Subscribe onHide={handleHideSubscription} /> : null}
      {showContactUs ? <ContactUs onHide={handleHideContact} /> : null}
      {showDonation ? <Donation /> : null}
    </header>
  );
}

export default Navbar;
