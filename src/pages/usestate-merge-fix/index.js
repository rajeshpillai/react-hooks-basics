import React, { useState } from "react";
import "./style.css";

export default function Example() {
  const [user, setUser] = useState({ username: "rajesh", password: "guess" });

  function handleChange(e) {
    setUser({
      ...user, // always merge properties with using objects with useState
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="app">
      <header>
        <h1>useState with Object(property merge issue) </h1>
        <h3>FIX: for property merge issue</h3>
      </header>

      <div className="info">
        <h2>{user.username}</h2>
        <hr />
        <h2>{user.password}</h2>
      </div>

      <div className="row">
        <div className="fields">
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="enter username"
          />
        </div>
      </div>
      <div className="row">
        <div className="fields">
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            placeholder="enter password"
          />
        </div>
      </div>
      <footer>
        <h2 className="tip">useState does not merge state by default </h2>
      </footer>
    </div>
  );
}
