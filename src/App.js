import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import { MenuContext } from "./context/menuContext";


//pages
import Ramas from './pages/Ramas';
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home";
import Polizas from "./pages/Polizas";
import Login from "./pages/login/Login";
import NotFound from './pages/NotFound';

function App() {

  const{dark} = useContext(MenuContext);  
  /*const [ login , setLogin] = useState(false);
  
  
  const loguear = (datos)=>{
    setLogin(datos);
  }*/

  return ( 
  
      <div className={dark ? `App dark` : 'App'}>
      <Routes>
          <Route path="/" element={<Dashboard/>}>
            <Route index element={<Home/>} />
            <Route path="/polizas" element={<Polizas/>} />
            <Route path="/ramas" element={<Ramas />} />       
          </Route>
            <Route path="/login" element={<Login/>} /> 
            <Route path="*" element={<NotFound/>} />          
        </Routes>          
      </div>
    
  );
}



export default App;

/*<Sidebar loguear={loguear} />
      <Dashboard />
       <div className={dark ? `App dark` : 'App'}> 
        {login ? 
          <>
            <main className= {show ? 'space-toggle' : null }  >
            <Navbar />
            <Sidebar />
            <Rutas />

            </main>
          </>
              :
          <>
            <Login loguear={loguear}  />
          </>
        }     
       
    </div>
      
      */
