import React, { useState } from 'react';
import './style.css';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");
  
  function increment() {
     if (error.trim() != "") {
      setError("");
    }
    setCounter(counter + 1);
  }
  
  function decrement() {
    if (counter == 0) {
      setError("You cannot order negative quantity!");
      return;
    }
    setCounter(counter - 1);
  }
  
  return (
    <div className="content">
      <h1>🏆 useState - Simple Value Demo </h1>
      <h1 className="count">{counter}</h1>
      <div className="item-wrapper">
        <span className="product">📒</span>
        <h4>Buy this ebook</h4>
      </div>
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      { error.length > 0 && <div className="animated error">
          {error}
        </div>
      }
    </div>
  );
}
 

