import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
// Episode 5 food app using swiggy api

const AppComponent = () => {
  return (
    <div className="main-container">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
