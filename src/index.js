import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// External CSS 
import 'react-confirm-alert/src/react-confirm-alert.css';

import "video-react/dist/video-react.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/dashboard.css";
import "./assets/css/custom.css";
import "./assets/css/style.css";


import { Provider } from 'react-redux'
import store from './_redux/Store';

toast.configure();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
