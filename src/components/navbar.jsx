import React, { useState } from "react";
import "../navbar.css";

function Navbar() {
  const [active, setActive] = useState(false); // State for toggling menu
  const [icon, setIcon] = useState(false); // State for toggling icon animation

  const navToggle = () => {
    setActive(!active);
    setIcon(!icon);
  };

  return (
    <nav className={`nav ${active ? "nav__active" : ""}`}>
      {/* <img src={'/assets/camera.png'} width={'90px'} height={'50px'}/> */}
      <figure className="logo-box">
        <a href="#">
          <img src="/assets/hs_logo.png" alt="Hashtag Studio" />
        </a>
      </figure>
      <ul className="nav__menu">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Gallery
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Testimonials
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Studio View
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Book a Session
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={`nav__toggler ${icon ? "toggle" : ""}`}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

    </nav>
  );
}

export default Navbar;
