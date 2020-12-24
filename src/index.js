import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './components/list';
// import App from './components/app/';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <List />
  </React.StrictMode>,
  document.getElementById('root')
);