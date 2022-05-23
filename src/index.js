import React from 'react';
import ReactDOM from 'react-dom/client';
import authReducer from './toolkit';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
const store=configureStore({
  reducer:authReducer,
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
