import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import Header from "./Header";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Content />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
