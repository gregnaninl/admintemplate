import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { MenuContext } from "../../context/menuContext";
//import './dashboard.css';
import { Outlet } from 'react-router-dom';


function Dashboard() {
    
    const{ show } = useContext(MenuContext);  
    
    return ( 
        <main className= {show ? 'space-toggle' : null }  >
            <Navbar />
            <Sidebar />
            <Outlet /> 

        </main>
     );
}

export default Dashboard;