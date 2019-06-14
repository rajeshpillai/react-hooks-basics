import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UseStateSimple from './pages/usestate-simple';
import UseStateMergeIssue from './pages/usestate-merge-issue';
import UseStateMergeFix from './pages/usestate-merge-fix';
import UseReducerCounter from './pages/usereducer-couter-example';
import UseReducerSetState from './pages/usereducer-setstate';
import UseContextTheme from './pages/usecontext-theme';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app">
          <h2>React Hooks: Tutorial Index </h2>
          <ol className="toc">
            <li><Link to="/usestate-simple">useState simple value</Link> </li>
            <li><Link to="/usestate-object" >useState with object (property merge issue)</Link> </li>
            <li><Link to="/usestate-object-fix">useState with object (property merge fix)</Link> </li>
            <li><Link to="/usereducer-counter">useReducer: Counter Example</Link> </li>
            <li><Link to="/usereducer-setstate" >useReducer: setState</Link> </li>
            <li><Link to="/usecontext-theme" >useContext</Link> </li>
          </ol>
        </div>
        <div className="page">
          <Route path="/usestate-simple" component={UseStateSimple} />
          <Route path="/usestate-object" component={UseStateMergeIssue} />
          <Route path="/usestate-object-fix" component={UseStateMergeFix} />
          <Route path="/usereducer-counter" component={UseReducerCounter} />
          <Route path="/usereducer-setstate" component={UseReducerSetState} />
          <Route path="/usecontext-theme" component={UseContextTheme} />

        </div>
      </div>
    </Router>
  );
}

export default App;
