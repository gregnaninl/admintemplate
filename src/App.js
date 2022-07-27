import Sidebar from "./components/sidebar/Sidebar";
import React, { useState } from 'react';
import Login from "./pages/login/Login";
import './index.css';



import Container from 'react-bootstrap/Container';


function App() {

  const [dark , setDark] = useState(false);

  const modo = ( )=>{setDark(!dark);}

  return ( 
   
    <div className={dark ? `App dark` : 'App'}>
       <Sidebar modo={modo} />
    </div>
  );
}
 /* 
  <div className={dark ? `App dark` : 'App'}>
  <Login />
   <Sidebar modo={modo} />
 */
export default App;
