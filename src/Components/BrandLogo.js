import React, { useState, useEffect } from "react";
import "./Images-style.css";
import "./navmenu.css";
import myLogo from './logo-no-background.png';

const BrandLogo = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logoImage">
      <a href="/Home" ><img src={myLogo} alt="Brand Logo" style={{ width: "75px", height: "auto" }}/></a>
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
