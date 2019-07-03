import React, { useReducer, useState, useContext } from 'react';
import './style.css';

const ThemeContext = React.createContext();

const defaultState = { counter: 0, someothervalues: "test" };

function reducer(oldState, newState) {
  return {
    ...oldState,
    ...newState
  }
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme1");

  function handleChange(e) {
    setTheme(e.target.value);
    e.preventDefault();
  }
  return (
    <ThemeContext.Provider value={theme}>
      <select onChange={handleChange}>
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
      </select>
      {children}
    </ThemeContext.Provider>
  );
}

function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <footer className={theme}>useContext demo</footer>
  );
}

function Counter() {
  const [state, setState] = useReducer(reducer, defaultState);
  const [value, reset] = useState(0);
  const theme = useContext(ThemeContext);

  function handleChange(e) {
    reset(e.target.value);
  }

  return (
    <div className={`app ${theme}`}>
      <h1>useContext </h1>
      <h1>{state.counter}</h1>
      <input style={{ width: "20%", textAlign: "center" }} type="number" value={value} onChange={handleChange} placeholder="enter initial counter value and press reset" />
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

export default function App() {
  return (
    <ThemeProvider>
      <Counter />
      <Footer />
    </ThemeProvider>
  );
}
