import { CHANGE_LANGUAGE } from './GlobalActionsTypes' 


export const changeLanguageAction = (code)=>{
    return{
        type:CHANGE_LANGUAGE,
        lang:code
    }
}