import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';

// @TODO: cache access token, implement redux, use popup if access token silent request fails
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
