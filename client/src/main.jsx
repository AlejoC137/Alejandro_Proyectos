import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import statement
import App from './App.jsx';
import './index.css';
import axios from 'axios';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
axios.defaults.baseURL = '/api';

//esto es para trabajar de forma deployada
  
// axios.defaults.baseURL = 'https://humanconet.adaptable.app/'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* // <React.StrictMode> */}
        <App />
      {/* </React.StrictMode>, */}
    </BrowserRouter>
  </Provider>
);
