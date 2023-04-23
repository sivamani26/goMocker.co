import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="home_Footer">
        <h5>About</h5>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Flipkart Stories</a>
        <a href="#">Press</a>
        <a href="#">Corporate Information</a>
      </div>
      <div className="home_Footer">
        <h5>HELP</h5>
        <a href="#">Payments</a>
        <a href="#">Shipping</a>
        <a href="#">Cancellation & Returns</a>
        <a href="#">FAQ</a>
        <a href="#">Report Infringement</a>
      </div>
      <div className="home_Footer">
      <h5>SOCIAL</h5>
<a href="#">Facebook</a>
<a href="#">Twitter</a>
<a href="#">YouTube</a>
      </div>
    </div>
  );
};

export default Footer;
