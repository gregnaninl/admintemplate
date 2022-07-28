import Sidebar from "./components/sidebar/Sidebar";
import React, { useContext, useState } from 'react';
import Login from "./pages/login/Login";
import './index.css';
import { MenuContext } from "./context/menuContext";


function App() {

  const{dark} = useContext(MenuContext);  
  const [ login , setLogin] = useState(false);
  
  
  const loguear = (datos)=>{
    setLogin(datos);
  }

  return ( 
   
    <div className={dark ? `App dark` : 'App'}> 
        {login ? 
          <>
            <Sidebar loguear={loguear} />
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
