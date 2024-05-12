import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react'
import ScrollCarousel from 'scroll-carousel';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <BrowserRouter>
  
  <Auth0Provider
    domain="dev-wxzoxhee7x8sg8y6.us.auth0.com"
    clientId="0U5qelqNFMg136GEYDwCnLzwXclE75wi"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>
</>
  

);

