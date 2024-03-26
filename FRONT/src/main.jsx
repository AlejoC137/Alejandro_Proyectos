import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import statement
import App from './App.jsx';
import './index.css';
import axios from 'axios';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
axios.defaults.baseURL = 'https://us-east4.gcp.data.mongodb-api.com/app/application-0-nnqen/endpoint';
// axios.defaults.baseURL = 'https://portafolio-alejoc137.vercel.app/';
// axios.defaults.baseURL = 'http://localhost:3001';

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
