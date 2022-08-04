import React from "react"
import {Link} from "react-router-dom"

function NotFound (){
   

    
        return(
            <>
           
            <p class="zoom-area"><b>Página no encontrada </b> 
            <Link to={"/"}> "ir a la página principal"</Link>
            </p>
            <div class="error-container">
                <span><span>4</span></span>
                <span>0</span>
                <span><span>4</span></span>
            </div>
               
            </>
        )   
}
export default NotFound