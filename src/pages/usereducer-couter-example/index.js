import React, { useState, useReducer } from 'react';

const defaultState = { counter: 0, someothervalues: "test" };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "reset":
      return {
        ...state,
        counter: Number(action.value)
      }
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [value, reset] = useState(0);

  function handleChange(e) {
    reset(e.target.value);
  }

  return (
    <div className="example">
      <h1>useReducer </h1>
      <h1>{state.counter}</h1>
      <input type="number" value={value} onChange={handleChange} placeholder="enter initial counter value and press reset" />
      <div className="buttons">
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={
          () => dispatch({ type: "reset", value: value })}>reset
        </button>
      </div>
    </div>
  );
}


