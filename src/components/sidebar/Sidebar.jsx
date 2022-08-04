import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import { MenuContext } from '../../context/menuContext';
import  logo from '../../img/Logo-2.png';


const Sidebar = () => {

    const{show} = useContext(MenuContext); 

    const menu = [
    {nombre: 'Deshboard',
    link: '',
    icono: 'fa-gauge'},
    {nombre: 'Polizas',
    link: 'polizas',
    icono: 'fa-file-shield'},
    {nombre: 'Ramas',
    link: 'ramas',
    icono: 'fa-list-ul'}];
    
   
  return (
    
   
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
            <div>
            <div className='nav-logo'>
                <img src={logo} className='avatar' alt='logo-LN' />
                    <span className="nav-logo-name">La nueva</span>
                </div >

                <div className="nav-list"> 
                    {menu.map(item =>(
                             <Link key={item.nombre} to={`/${item.link}`} className='nav-link-list' >
                             <i className={`fa-solid ${item.icono} nav-link-icon`}></i>
                             <span className="nav-link-name">{item.nombre}</span>
                             </Link>
                    ))}                  
                </div>
                </div>
                    <Link to="/" className='nav-link-list'>
                        <i className="fa-solid fa-user nav-link-icon"></i>
                        <span className="nav-link-name">Usuarios</span>
                    </Link>
                    
                    <Link to="/login" className='nav-link-list' >
                        <i className="fa-solid fa-right-from-bracket nav-link-icon"></i>
                        <span className="nav-link-name">Salir</span>
                    </Link>
                              
        </nav>
      </aside>

    
    
 );
}

export default Sidebar;

/*onClick={()=>props.loguear(false)}
 <Link to="/" className='nav-link-list active' >
                        <i className="fa-solid fa-gauge nav-link-icon"></i>
                        <span className="nav-link-name">Dashboard</span>
                    </Link>
                    <Link to="/polizas" className='nav-link-list'>
                        <i className="fa-solid fa-file-shield nav-link-icon"></i>
                        <span className="nav-link-nombre">Polizas</span>
                    </Link>
                    <Link to="/ramas" className='nav-link-list'>
                        <i className="fa-solid fa-list-ul nav-link-icon"></i>
                        <span className="nav-link-name">Ramas</span>
                    </Link>
    
    
    */
