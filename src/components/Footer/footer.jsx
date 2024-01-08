import React from "react";
import facebookLogo from "../../assets/facebook-logo.svg";
import instagramLogo from "../../assets/instagram-logo.svg";
import twitterLogo from "../../assets/twitter-logo.svg";
import whatsappLogo from "../../assets/whatsapp-logo.svg";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./footer.css";
const footer = () => {
  return (
    <footer>
      <div className="footer-inner-div">
        <div className="line-one-footer">
          <img src={logo} alt="" className="inner-logo" />

          <div className="nav-footer">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>

              <li><Link to="/news">News</Link> </li>
              <li><Link to="/lebnenele">Lebnen Ele</Link></li>
            </ul>
          </div>
          <div className="social-media-container-footer">
            <Link to="#"><img src={facebookLogo} alt="facbook icon" /></Link>
            <Link to="#"><img src={instagramLogo} alt="instagram icon" /></Link>
            <Link to="#"><img src={twitterLogo} alt="twitter icon " /></Link>
            <Link to="#"><img src={whatsappLogo} alt="whatsapp icon" /></Link>
          </div>
        </div>
        <p>&copy; 2023 Tous Pour Le Liban Assoiation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default footer;
