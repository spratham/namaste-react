import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
export default HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="head-container">
      <img className="logo" src={LOGO_URL} alt="image"></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
