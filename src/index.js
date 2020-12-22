import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './components/product-list';
// import App from './components/app/';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
);