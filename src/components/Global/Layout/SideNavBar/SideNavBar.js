import React, { useEffect, useRef } from 'react'
import styles from './SideNavBar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import {ReactComponent as LevelLogoIcon} from 'assets/icons/levelLogoIcon.svg'
import {ReactComponent as HomeMenuIcon} from 'assets/icons/homeMenuIcon.svg'
import {ReactComponent as HelpMenuIcon} from 'assets/icons/helpMenuIcon.svg'
import {ReactComponent as SettingMenuIcon} from 'assets/icons/settingMenuIcon.svg'
import {ReactComponent as RightArrowIcon} from 'assets/icons/rightArrowIcon.svg'
import {ReactComponent as DownArrowIcon} from 'assets/icons/downArrowIcon.svg'
import { useTranslation } from 'react-i18next'
import './SideNavBar.css'
function SideNavBar({isSideMenuOpen,closeSideMenu}) {
  const accordionRef =useRef(null)
  const {t} =useTranslation()
 
  useEffect(()=>{
    let accordionCollapse = document.querySelectorAll('.accordion-button:not(.collapsed)')
    if(!isSideMenuOpen){
      accordionCollapse.forEach(accordionItem=>{
        accordionItem.click()
      })
    }
  },[isSideMenuOpen])
  return (
    <div className={`${styles['side-navbar__content-wrapper']} ${isSideMenuOpen?'':styles['side-navbar__content-wrapper--closed']} ${isSideMenuOpen?'':'side-navbar__content-wrapper--closed'} `}>
      <Accordion ref={accordionRef} className={styles['navbar__accordion']}>
        <div className={styles['navbar__logo-wrapper']}>
            <NavLink to='/' className={styles['navbar__logo-link']}>
                <LevelLogoIcon className={styles['navbar__logo']}/>
            </NavLink>
            <button className={styles['navbar__logo-responsive-button']} onClick={closeSideMenu}>
                <RightArrowIcon className={styles['navbar__logo-responsive-icon']}/>
            </button>
        </div>
        <div className={styles['navbar__section-wrapper']}>
          <h3 className={styles['navbar__section-wrapper-title']}>{t('Home')}</h3>
          <Accordion.Item eventKey="0" className={styles['side-navbar__accordion-item']}>
              <Accordion.Header className={`${styles['side-navbar__item-wrapper']} ${window.location.pathname==='/' ?styles['side-navbar__item-wrapper--active']:''}`}>
                <Link to='/' className={styles['side-navbar__side-nav-link']}>
                  <div className={styles['side-navbar__accordion-header-content']}>
                    <div className={styles['side-navbar__accordion-header-item-cont']}>
                      <div className={`${styles['side-navbar__item-icon-wrapper']}`}>
                        <HomeMenuIcon className={`${styles['side-navbar__item-icon']}`}/>
                      </div>
                      <span className={styles['side-navbar__accordion-header']}>{t('Home')}</span>
                    </div>
                  </div>
                </Link>
              </Accordion.Header>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={styles['side-navbar__accordion-item']}>
              <Accordion.Header  className={`${styles['side-navbar__item-wrapper']} ${window.location.pathname==='/side-navbar' ?styles['side-navbar__item-wrapper--active']:''}`}>
                <div className={styles['side-navbar__accordion-header-content']}>
                  <div className={styles['side-navbar__accordion-header-item-cont']}>
                    <div className={`${styles['side-navbar__item-icon-wrapper']}`}>
                      <HomeMenuIcon className={`${styles['side-navbar__item-icon']}`}/>
                    </div>
                    <span className={styles['side-navbar__accordion-header']}>
                      {t('Menu Number')} 1
                      <DownArrowIcon className={`${styles['side-navbar__accordion-header-icon']} side-navbar__accordion-header-icon`}/>
                    </span>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className={styles['side-navbar__accordion-body']}>
                <ul className={styles['side-navbar__accordion-list']}>
                  <li className={styles['side-navbar__accordion-list-item']}>
                    <Link to='/' className={styles['side-navbar__side-link']}>{t('Menu Mini')}</Link>
                  </li>
                  <li className={styles['side-navbar__accordion-list-item']}>
                    <Link to='/' className={styles['side-navbar__side-link']}>{t('Menu Mini')}</Link>
                  </li>
                  <li className={styles['side-navbar__accordion-list-item']}>
                    <Link to='/' className={styles['side-navbar__side-link']}>{t('Menu Mini')}</Link>
                  </li>
                </ul>
              </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className={styles['side-navbar__accordion-item']}>
              <Accordion.Header  className={`${styles['side-navbar__item-wrapper']} ${window.location.pathname==='/side-navbar' ?styles['side-navbar__item-wrapper--active']:''}`}>
                <div className={styles['side-navbar__accordion-header-content']}>
                  <div className={styles['side-navbar__accordion-header-item-cont']}>
                    <div className={`${styles['side-navbar__item-icon-wrapper']}`}>
                      <HomeMenuIcon className={`${styles['side-navbar__item-icon']}`}/>
                    </div>
                    <span className={styles['side-navbar__accordion-header']}>
                      {t('Menu Number')} 2
                      <DownArrowIcon className={`${styles['side-navbar__accordion-header-icon']} side-navbar__accordion-header-icon`}/>
                    </span>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className={styles['side-navbar__accordion-body']}>
                <ul className={styles['side-navbar__accordion-list']}>
                  <li className={styles['side-navbar__accordion-list-item']}>
                    <Link to='/' className={styles['side-navbar__side-link']}>{t('Menu Mini')}</Link>
                  </li>
                  <li className={styles['side-navbar__accordion-list-item']}>
                    <Link to='/' className={styles['side-navbar__side-link']}>{t('Menu Mini')}</Link>
                  </li>
                  <li className={styles['side-navbar__accordion-list-item']}>
                    <Link to='/' className={styles['side-navbar__side-link']}>{t('Menu Mini')}</Link>
                  </li>
                </ul>
              </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className={styles['side-navbar__accordion-item']}>
              <Accordion.Header  className={`${styles['side-navbar__item-wrapper']} ${window.location.pathname==='/side-navbar' ?styles['side-navbar__item-wrapper--active']:''}`}>
                <div className={styles['side-navbar__accordion-header-content']}>
                  <div className={styles['side-navbar__accordion-header-item-cont']}>
                    <div className={`${styles['side-navbar__item-icon-wrapper']}`}>
                      <HomeMenuIcon className={`${styles['side-navbar__item-icon']}`}/>
                    </div>
                    <span className={styles['side-navbar__accordion-header']}>
                      {t('Menu Number')}
                      <DownArrowIcon className={`${styles['side-navbar__accordion-header-icon']} side-navbar__accordion-header-icon`}/>
                    </span>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className={styles['side-navbar__accordion-body']}>
                <ul className={styles['side-navbar__accordion-list']}>
                  <li className={styles['side-navbar__accordion-list-item']}>
                    <Link to='/' className={styles['side-navbar__side-link']}>{t('Menu Mini')}</Link>
                  </li>
                  <li className={styles['side-navbar__accordion-list-item']}>
                    <Link to='/' className={styles['side-navbar__side-link']}>{t('Menu Mini')}</Link>
                  </li>
                  <li className={styles['side-navbar__accordion-list-item']}>
                    <Link to='/' className={styles['side-navbar__side-link']}>{t('Menu Mini')}</Link>
                  </li>
                </ul>
              </Accordion.Body>
          </Accordion.Item>
        </div>
    
        <div className={styles['navbar__section-wrapper']}>
          <h3 className={`${styles['navbar__section-wrapper-title']} ${styles['navbar__section-wrapper-title--margin']}`}>{t('Account')}</h3>
          <Accordion.Item eventKey="5" className={styles['side-navbar__accordion-item']}>
              <Accordion.Header className={`${styles['side-navbar__item-wrapper']} ${window.location.pathname==='/help' ?styles['side-navbar__item-wrapper--active']:''}`}>
                <Link to='/' className={styles['side-navbar__side-nav-link']}>
                  <div className={styles['side-navbar__accordion-header-content']}>
                    <div className={styles['side-navbar__accordion-header-item-cont']}>
                      <div className={`${styles['side-navbar__item-icon-wrapper']}`}>
                        <HelpMenuIcon className={`${styles['side-navbar__item-icon']}`}/>
                      </div>
                      <span className={styles['side-navbar__accordion-header']}>{t('Help')}</span>
                    </div>
                  </div>
                </Link>
              </Accordion.Header>
          </Accordion.Item>

          <Accordion.Item eventKey="6" className={styles['side-navbar__accordion-item']}>
              <Accordion.Header className={`${styles['side-navbar__item-wrapper']} ${window.location.pathname==='/settings' ?styles['side-navbar__item-wrapper--active']:''}`}>
                <Link to='/' className={styles['side-navbar__side-nav-link']}>
                  <div className={styles['side-navbar__accordion-header-content']}>
                    <div className={styles['side-navbar__accordion-header-item-cont']}>
                      <div className={`${styles['side-navbar__item-icon-wrapper']}`}>
                        <SettingMenuIcon className={`${styles['side-navbar__item-icon']}`}/>
                      </div>
                      <span className={styles['side-navbar__accordion-header']}>{t('Settings')}</span>
                    </div>
                  </div>
                </Link>
              </Accordion.Header>
          </Accordion.Item>
        </div>
      </Accordion>
    </div>
    
  )
}

export default SideNavBar