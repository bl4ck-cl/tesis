import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar/Sidebar'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
