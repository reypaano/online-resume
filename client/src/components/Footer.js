import React from 'react'
import Logo from '../images/RA-logo.png'
import { BsInstagram } from 'react-icons/bs';
import {BsFacebook} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsInstagram />
        <BsTwitter />
        <BsFacebook />
        <BsLinkedin />
      </div>
      <p> &copy; 2022 https://github.com/reypaano</p>
    </div>
  );
}
export default Footer