import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { PATHS } from "../constants/constants";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div>
        <p>2022 © Adminto theme by</p>
      </div>
      <ul className="footerRight">
        <li>
          <Link to={PATHS.PATH_ABOUT_US}>About Us</Link>
        </li>
        <li>
          <Link to={PATHS.PATH_HELP}>Help</Link>
        </li>
        <li>
          <Link to={PATHS.PATH_CONTACT}>Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
