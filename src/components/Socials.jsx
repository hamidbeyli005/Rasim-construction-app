import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Socials() {
  return (
    <div className="socials">
      <a
        href="https://www.facebook.com/seyx.rasim"
        target="_blank"
        className="facebook"
      >
        <FaFacebookF></FaFacebookF>
      </a>
      <a
        href="https://www.instagram.com/vrasim/"
        target="_blank"
        className="instagram"
      >
        <FaInstagram></FaInstagram>
      </a>
      <a
        href="https://www.linkedin.com/in/rasim-valibayli-696291128"
        target="_blank"
        className="linkedin"
      >
        <FaLinkedinIn></FaLinkedinIn>
      </a>
    </div>
  );
}

export default Socials;
