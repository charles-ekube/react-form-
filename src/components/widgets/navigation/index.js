import React from "react";
import { Avatar, Logo } from "../../../assets/images";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar-container">
          <div className="menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo">
            <img src={Logo} alt="logo" />
            <span>1StopShop</span>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <Link to="/">SiteMap</Link>
              </li>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
              <li>
                <Link to="/member">BecomeAMember</Link>
              </li>
              <li>
                <Link to="/advert">Advertising</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="avatar">
            <img src={Avatar} alt="avatar" />
            <span>Name</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Navbar };
