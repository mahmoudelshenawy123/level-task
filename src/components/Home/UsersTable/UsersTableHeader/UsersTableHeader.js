import React from 'react'
import styles from './UsersTableHeader.module.css'
import FirstPersonImage from 'assets/imgs/FirstPersonImage.png'
import {ReactComponent as SearhIcon} from 'assets/icons/searhIcon.svg'
import {ReactComponent as FilterIcon} from 'assets/icons/filterIcon.svg'
import {ReactComponent as TwoArrowsIcon} from 'assets/icons/twoArrowsIcon.svg'

import { useTranslation } from 'react-i18next'
function UsersTableHeader() {
  const {t} = useTranslation()
  return (
    <div className={styles['users-table__header']}>
      <div className={styles['users-table__header-input-wrapper']}>
        <SearhIcon className={styles['users-table__header-input-icon']}/>
        <input 
          type='text'
          placeholder={`${t('Search For')}`}
          className={styles['users-table__header-input']}
        />
      </div>
      <button className={styles['users-table__header-button']}>
        <FilterIcon className={styles['users-table__header-button-icon']}/>
      </button>
      <button className={styles['users-table__header-button']}>
        <TwoArrowsIcon className={styles['users-table__header-button-icon']}/>
      </button>
      <button className={styles['users-table__header-add-button']}>
        + {t('New Add')}
      </button>
    </div>
  )
}

export default UsersTableHeader