import {  createContext, useReducer } from "react"
import MenuReducer from "./menuReducer"

const INITIAL_STATE = {
    show: false,
    dark:false
}

export const MenuContext = createContext(INITIAL_STATE)

export const MenuContextProvider = ({ children }) =>{
    const [state,dispatch] = useReducer(MenuReducer, INITIAL_STATE);

    return(
        <MenuContext.Provider 
            value={{
                show: state.show,
                dark: state.dark,
                dispatch
            }}
        >
            {children}
        </MenuContext.Provider>
    );
}