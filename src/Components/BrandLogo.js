import React, { useState} from "react";
import "./Images-style.css";
import "./navmenu.css";

const BrandLogo = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div className="navbar">
      <div className="logoImage">
        <a href="/Home" ><img src="logo-no-background.png" alt="Brand Logo" style={{ width: "100px"}}/></a>
      </div>
      <div className="nav" >
        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <routes><li className="nav-item"><a href="/About" onClick={closeMenu}>About</a></li></routes>
          <li className="nav-item"><a href="/Start" onClick={closeMenu}>Get Started</a></li>
          <li className="nav-item"><a href="/FAQ" onClick={closeMenu}>FAQ</a></li>
          <li className="nav-item"><a href="/Blog" onClick={closeMenu}>Blog</a></li>
        </ul>
      </div>
      <div className='hamburger' onClick={toggleMobileMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </div>
  );
};

export default BrandLogo;
