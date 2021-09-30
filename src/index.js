import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Test } from './components/Test';
import "./styles/landing.scss";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);
