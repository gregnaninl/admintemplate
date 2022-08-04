import { useContext } from "react";
import { MenuContext } from "../../context/menuContext";
import { Switch } from '@mui/material';



const Navbar = () => {

    const{show ,dispatch } = useContext(MenuContext);  

    return ( 
   
        <header className={`header ${show ? 'space-toggle' : null}`}> 
            <div className='header-toggle' onClick={()=> dispatch({type:"SHOW"})} >
                <i className="fa-solid fa-bars nav-bar-icon"></i>
            </div> 
            <div>
            <Switch className='modo-color' defaultChecked onChange={()=> dispatch({type:"DARK"})} color='secondary' />
            </div>       
        </header>
        

    
    );
}
 
export default Navbar;