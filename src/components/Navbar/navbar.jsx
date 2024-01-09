
import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/Logo.png";
import subscribe from "../../assets/subscribe.png";
import donate from "../../assets/heart.png";
import Subscribe from "../Subscribe/subscribe";
import ContactUs from "../ContactUs/contactUs.jsx";
import { Link } from "react-router-dom";
import Donation from "../Donation/donation.jsx";

const Navbar = () => {
  const [showSubscription, setShowSubscription] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const [showDonationModel, setShowDonationModel] = useState(false);
  const [showFirstDropdown, setShowFirstDropdown] = useState(false);
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);

  const handelMenu = () => {
    setShowMenu(true);
  };
  const handelHideMenu = () => {
    setShowMenu(false);
  };
  console.log(activeLink);

  const handleShowContact = (e) => {
    e.preventDefault();
    setShowContactUs(!showContactUs);
    document.querySelector(".overlay").style.display = "block";
  };
  const handleHideContact = () => {
    document.querySelector(".overlay").style.display = "none";
    setShowContactUs(false);
  };

  const handleShowSubscription = () => {
    setShowSubscription(!showSubscription);
    document.querySelector(".overlay").style.display = "block";
  };
  const handleHideSubscription = () => {
    document.querySelector(".overlay").style.display = "none";
    setShowSubscription(false);
  };
  const handleCloseOverlay = () => {
    document.querySelector(".overlay").style.display = "none";
    setShowContactUs(false);
    setShowSubscription(false);
    setShowDonationModel(false);
    setShowFirstDropdown(false);
    setShowSecondDropdown(false);
  };

  const handleShowDonation = () => {
    // Toggle the visibility of the first dropdown and hide the second dropdown
    setShowFirstDropdown(!showFirstDropdown);
    setShowSecondDropdown(false);
    setShowDonationModel(!showDonationModel);
    document.querySelector(".overlay").style.display = "block";
  };

  const handleHideDonation = () => {
    document.querySelector(".overlay").style.display = "none";
    setShowDonationModel(false);
  };

  return (
    <header className="navbar-header">
      <div className="header-section">
        <Link
          onClick={() => setActiveLink("Home")}
          className={activeLink === "Home" ? "active-link" : ""}
          to="Home"
        >
          <img src={logo} alt="logo-TPLL" className="header-logo" />
        </Link>
        <div className="header-btns">
          <button
            className="continue-application header-subscribe-btn place-items-center"
            onClick={handleShowSubscription}
          >
            <svg xmlns="http://www.w3.org/2000/svg"  fill="#C0202E" height="16" width="16" viewBox="0 0 512 512"><path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/></svg>
            Join our newsletter
          </button>
          <div className="header-donation-wrapper">
            <button
              className="header-donate-btn"
              onClick={handleShowDonation}
              
            >
                <svg xmlns="http://www.w3.org/2000/svg"  fill="white" height="16" width="16" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
              Donate
            </button>

          </div>
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
        <input
          type="text"
          placeholder="search..."
          className="header-search-bar"
        />
      </div>
      <div className="overlay" onClick={handleCloseOverlay}></div>
      {showSubscription ? <Subscribe onHide={handleHideSubscription} /> : null}
      {showContactUs ? <ContactUs onHide={handleHideContact} /> : null}
      {showDonationModel ? <Donation onHide={handleHideDonation} /> : null}
    </header>
  );
};

export default Navbar;
