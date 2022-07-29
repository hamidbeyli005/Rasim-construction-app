import React from "react";
import { FiPhoneCall } from "react-icons/fi";

function Button({ data }) {
  return (
    <div className="button">
      <a href="tel:0603312804">
        {data}
        <FiPhoneCall></FiPhoneCall>
      </a>
    </div>
  );
}

export default Button;
