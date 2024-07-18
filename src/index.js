import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter as Router  } from 'react-router-dom';
import { inject } from '@vercel/analytics';


// Inject Vercel Analytics
inject();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

      <App />
   
    
  </Router>
  

);
