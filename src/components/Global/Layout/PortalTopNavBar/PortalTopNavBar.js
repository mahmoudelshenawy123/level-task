import React from 'react'
import styles from './PortalTopNavBar.module.css'
import ChangeLangueList from 'components/Global/Elements/ChangeLangueList/ChangeLangueList'
function PortalTopNavBar() {
  return (
    <div className={`${styles['portal__top-navbar']} `}>
        <ChangeLangueList/>
    </div>
  )
}

export default PortalTopNavBar