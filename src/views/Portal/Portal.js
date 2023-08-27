import SideNavBar from 'components/Global/Layout/SideNavBar/SideNavBar'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Portal.module.css'
import PortalTopNavBar from 'components/Global/Layout/PortalTopNavBar/PortalTopNavBar'
function Portal() {
  const [isSideMenuOpen ,setIsSideMenuOpen] = useState(true)

  let closeSideMenu = ()=>{
    setIsSideMenuOpen(prevValue=>!prevValue)
  }
  let chageWindoResize =()=>{
    if(window.innerWidth <992){
      setIsSideMenuOpen(false)
    }
  }
  useEffect(()=>{
    if(window.innerWidth <992){
      setIsSideMenuOpen(false)
    }
    window.addEventListener('resize',chageWindoResize)
    return ()=>window.removeEventListener('resize',chageWindoResize)
  },[])
    
  return (
    <section id ={styles['portal']}>
      <PortalTopNavBar/>
      <div className={styles['portal__layout-wrapper']}>
          <div className={`${styles['portal__layout-side-navbar-wrapper']}  ${isSideMenuOpen?'':styles['portal__layout-side-navbar-wrapper--closed']}`}>
            <SideNavBar isSideMenuOpen={isSideMenuOpen} closeSideMenu={closeSideMenu}/>
          </div>
          <div className={styles['portal__layout-content-wrapper']}>
            <Outlet/>
          </div>
      </div>
    </section>
  )
}

export default Portal