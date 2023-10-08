import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import App from './App';
import Video from './components/Video';
// import Video from './Video';
import Sat from './Sat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Video/> */}
    {/* <Sat/> */}
    {/* <Video/> */}
  </React.StrictMode>
);

