import React, { useEffect } from 'react'
import i18next from 'i18next'
import Cookies from 'js-cookie'
import { useDispatch} from 'react-redux'
import { changeLanguageAction } from 'reduxStore/Global/GlobalActions'
import styles from './ChangeLangueList.module.css'

function ChangeLangueList() {
    const languages=[
        {
            code:'ar',
            name:'العربية',
            country_code:'sa',
            dir:'rtl'
        },
        {
            code:'en',
            name:'english',
            country_code:'gb',
            dir:'ltr'
        },
        
    ]
    const dispatch= useDispatch()
    const currentLanguageCode = Cookies.get('i18next') || 'ar'
    const currentLanguage = languages.find(l=> l.code === currentLanguageCode)
    useEffect(()=>{
        document.body.dir=currentLanguage.dir ||'rtl'
    },[currentLanguage])
    let changeLanguage=(code)=>{
        i18next.changeLanguage(code)
        changeLanguageAction(dispatch,code)
        window.location.reload()
    }
  return (
    <>
    <button 
    className={`${styles['language-button']} ${styles['language-button--english']} 
    ${currentLanguageCode==='en'?styles['language-button--active']:''}`}
    onClick={()=>{changeLanguage('en')}}>
        English
    </button>
    <button 
    className={`${styles['language-button']} ${styles['language-button--arabic']} 
    ${currentLanguageCode==='ar'?styles['language-button--active']:''}`}
    onClick={()=>{changeLanguage('ar')}}>
        العربية
    </button>
                        
    </>
  )
}

export default ChangeLangueList