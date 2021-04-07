import React from "react";

export default function Loginform() {
  return (
    <div className="App">
      <div id="demo">
        <form>
          <input className="css-input" type="text" placeholder="username" />
          <input className="css-input" type="text" placeholder="password" />
          <input className="myButton" type="submit" />
        </form>
      </div>
    </div>
  );
}
