import React, { useReducer, useState } from 'react';
import './style.css';

const defaultState = { counter: 0, someothervalues: "test" };


function reducer(oldState, newState) {
  return {
    ...oldState,
    ...newState
  }
}

export default function App() {
  const [state, setState] = useReducer(reducer, defaultState);

  const [value, reset] = useState(0);

  function handleChange(e) {
    reset(e.target.value);
  }

  return (
    <div className="example">
      <h1>useReducer: Simulate setState </h1>
      <h1>{state.counter}</h1>
      <input type="number" value={value} onChange={handleChange} placeholder="enter initial counter value and press reset" />
      <div className="buttons">
        <button onClick={() => setState({ counter: state.counter + 1 })}>+</button>
        <button onClick={() => setState({ counter: state.counter - 1 })}>-</button>
        <button onClick={
          () => setState({ counter: Number(value) })}>reset
        </button>
      </div>
    </div>
  );
}


