import React, { useState } from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';
import { Switch } from '@mui/material';

const Sidebar = (props) => {

    const [show , setShow] = useState(false);
    
   
  return (
    <main className= {show ? 'space-toggle' : null }  >
      <header className={`header ${show ? 'space-toggle' : null}`}> 
        <div className='header-toggle' onClick={()=> setShow(!show)}>
            <i className="fa-solid fa-bars"></i>
        </div> 
        <div>
        <Switch className='modo-color' defaultChecked onChange={()=> props.modo()} color='secondary' />
        </div>       
      </header>
      
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
            <div>
                <Link to="/" className='nav-logo'>
                    <i className="fas fa-home-alt nav-logo-icon"></i>
                    <span className="nav-logo-name">Home</span>
                </Link>

                <div className="nav-list">
                    <Link to="/" className='nav-link-list active' >
                        <i className="fa-solid fa-gauge nav-link-icon"></i>
                        <span className="nav-link-name">Dashboard</span>
                    </Link>
                    <Link to="/" className='nav-link-list'>
                        <i className="fa-solid fa-file-shield nav-link-icon"></i>
                        <span className="nav-link-nombre">Polizas</span>
                    </Link>
                    <Link to="/" className='nav-link-list'>
                        <i className="fa-solid fa-list-ul nav-link-icon"></i>
                        <span className="nav-link-name">Ramas</span>
                    </Link>
                    
                </div>
                </div>
                    <Link to="/" className='nav-link-list'>
                        <i className="fa-solid fa-user nav-link-icon"></i>
                        <span className="nav-link-name">Usuarios</span>
                    </Link>
                    
                    <Link to="/" className='nav-link-list' onClick={()=>props.loguear(false)}>
                        <i className="fa-solid fa-right-from-bracket nav-link-icon"></i>
                        <span className="nav-link-name">Salir</span>
                    </Link>
                              
        </nav>
      </aside>
      <h1>Contenido</h1>    
        
    </main>
  )
}

export default Sidebar
