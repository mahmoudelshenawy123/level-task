import React from 'react'
import styles from './UsersTableFooter.module.css'
import FirstPersonImage from 'assets/imgs/FirstPersonImage.png'
import {ReactComponent as PaginationRightArrowIcon} from 'assets/icons/paginationRightArrowIcon.svg'
import {ReactComponent as PaginationLeftArrowIcon} from 'assets/icons/paginationLeftArrowIcon.svg'

import { useTranslation } from 'react-i18next'
function UsersTableFooter() {
  const {t} = useTranslation()
  return (
    <div className={styles['users-table__footer']}>
      <div className={styles['users-table__footer-total-wrapper']}>
        {t('Show')}
        <select className={styles['users-table__footer-total']}>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
        </select>
        {t('From 250')}
      </div>
      <div className={styles['users-table__footer-pagination-wrapper']}>
        <button className={styles['users-table__footer-pagination-arrow-button']}>
          <PaginationRightArrowIcon/>
        </button>
        <button 
        className={`${styles['users-table__footer-pagination-button']} 
        ${styles['users-table__footer-pagination-button--active']}`}>1</button>
        <button 
        className={`${styles['users-table__footer-pagination-button']}`}>2</button>
        <button 
        className={`${styles['users-table__footer-pagination-button']}`}>3</button>
        <button 
        className={`${styles['users-table__footer-pagination-button']}`}>4</button>
        <button 
        className={`${styles['users-table__footer-pagination-button']}`}>5</button>
        <button className={styles['users-table__footer-pagination-arrow-button']}>
          <PaginationLeftArrowIcon/>
        </button>
      </div>
    </div>
  )
}

export default UsersTableFooter