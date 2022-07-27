import Sidebar from "./components/sidebar/Sidebar";
import React, { useState } from 'react';
import Login from "./pages/login/Login";
import './index.css';






function App() {

  const [dark , setDark] = useState(false);
  const [ login , setLogin] = useState(false);

  const modo = ( )=>{setDark(!dark);}
  
  const loguear = (datos)=>{
    setLogin(datos);
  }

  return ( 
   
    <div className={dark ? `App dark` : 'App'}> 
        {login ? 
          <>
            <Sidebar modo={modo} loguear={loguear} />
          </>
              :
          <>
            <Login loguear={loguear}  />
          </>
        }     
       
    </div>
  );
}

export default App;
