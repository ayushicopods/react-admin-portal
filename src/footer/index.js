import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div>
        <p>
          2022 © Adminto theme by
          <Link to="/codertheme" className="footerLink">
            Coderthemes
          </Link>
        </p>
      </div>
      <ul className="footerRight">
        <li>
          <Link to="">About Us</Link>
        </li>
        <li>
          <Link to="">Help</Link>
        </li>
        <li>
          <Link to="">Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
