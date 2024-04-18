import React from "react";
import { LOGO_URL } from "../utils/constants";

export default HeaderComponent = () => {
  return (
    <div className="head-container">
      <img className="logo" src={LOGO_URL} alt="image"></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
