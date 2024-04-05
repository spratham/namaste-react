import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "topic" }, "blah bleh "),
  React.createElement("div", { id: "h" }, "div through react object"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
