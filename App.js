const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "topic" }, "nested"),
  React.createElement("div", { id: "h" }, "div through react object"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
