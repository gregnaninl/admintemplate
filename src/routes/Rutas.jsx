import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Polizas from "../pages/polizas/Polizas";

const Rutas = () => {
    return ( 

        <Routes>            
            <Route path="/polizas" element={<Polizas />} />
            <Route path="/" element={<Home />} />
        </Routes>

     );
}
 
export default Rutas;