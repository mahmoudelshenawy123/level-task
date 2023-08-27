import { CHANGE_LANGUAGE } from "./GlobalActionsTypes"

const initialState = {
    lang:'en'
}

const GlobalReducer = (state = initialState ,action)=>{
    switch (action.type){
        case CHANGE_LANGUAGE :{
            return {
                ...state,
                lang:action.lang
            }
        }
        default: return {state}
    }
}

export default GlobalReducer