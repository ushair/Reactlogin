import "./styles.css";
import React from "react";
import Loginform from "./Loginform.js";
export default function App() {
  const isloggedin = false;

  return (
    <div className="App">
      {isloggedin ? (
        <h1 id="demotext">Welcome to Home page </h1>
      ) : (
        <Loginform />
      )}
    </div>
  );
}
