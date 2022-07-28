
const MenuReducer = (state, action) =>{
    switch(action.type){
        case "SHOW":{
            return{
                ...state,
                show: !state.show                
            };    
        }
        case "DARK":{
            return{
                ...state,
                dark: !state.dark
            };    
        }    
        default: 
        return state;
    }
};

export default MenuReducer;