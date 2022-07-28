import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuContextProvider } from './context/menuContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuContextProvider >
      <BrowserRouter>
          <App />
      </BrowserRouter>   
    </MenuContextProvider>    
  </React.StrictMode>
);


