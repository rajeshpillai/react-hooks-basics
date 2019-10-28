import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [user, setUser] = useState({ username: "r", password: "a" });

  function handleChange(e) {
    setUser({
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="app">
      <header>
        <h1>useState with Object(property merge issue) </h1>
        <h3>As you type in one field, the other value disappears</h3>
      </header>
      <br />
      <h2>{user.username}</h2>
      <hr />
      <h2>{user.password}</h2>
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
        <h2>useState does not merge state by default </h2>
      </footer>
    </div>
  );
}
