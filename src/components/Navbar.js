import React, { useState } from "react";
import { Link } from "gatsby";
import instaLogo from "../img/social/instagram.svg";
import logo from "../img/logo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-end has-text-centered navbar-menu ${isActive && "is-active"}`}>
          {/* TODO: inline override of padding is a result of refactoring
              to a ul for accessibilty purposes, would like to see a css
              re-write that makes this unneccesary.
           */}
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
          <li className="navbar-item has-text-centered">
            <a
              className="navbar-item"
              href="https://www.instagram.com/boho_bosphorus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={instaLogo} alt="Instagram" />
              </span>
            </a>
          </li>
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Boho Bosphorus" style={{ width: "88px" }} />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
