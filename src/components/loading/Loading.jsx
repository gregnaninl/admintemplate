import React from "react"
import './loading.css';

function Loading (props){
        const {active} = props
        if(active){
          return(
              <>
               <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
              </>
          )
        }else{
          return (
            <>
              {props.children}
            </>
          )
        }
        
      
    
    
    
}
export default Loading