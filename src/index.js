import React from 'react';
import ReactDOM from 'react-dom/client';
import Web from './Web';
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Web />
  </React.StrictMode>
);