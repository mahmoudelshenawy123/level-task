import React from 'react'
import styles from './UsersTableHeaderSettings.module.css'
import {ReactComponent as TableSettingControlIcon} from 'assets/icons/tableSettingControlIcon.svg'
import {ReactComponent as TrueIcon} from 'assets/icons/trueIcon.svg'
import { useTranslation } from 'react-i18next'
function UsersTableHeaderSettings({isMenuActive}) {
  const {t} = useTranslation()
  return (
    <div className={`${styles['users-table__header-settings']} ${isMenuActive &&styles['users-table__header-settings--active']}`}>
      <h3 className={styles['users-table__header-settings-title']}>{t('Control Table')}</h3>
      <ul className={styles['users-table__header-list']}>
        <li className={styles['users-table__header-item']}>
          <div className={styles['users-table__header-item-title-wrapper']}>
            <TableSettingControlIcon className={styles['users-table__header-item-icon']}/>
            <span className={styles['users-table__header-item-title']}>{t('Id No')}</span>
          </div>
          <div>
            <input 
              type='checkbox'
              className={styles['users-table__header-item-input']}
              name='filter'
              value='idNo'
              id='idNo'
            />
            <label htmlFor='idNo' className={styles['users-table__header-item-label']}>
              <TrueIcon className={styles['users-table__header-item-label-icon']}/>
            </label>
          </div>
        </li>
        <li className={styles['users-table__header-item']}>
          <div className={styles['users-table__header-item-title-wrapper']}>
            <TableSettingControlIcon className={styles['users-table__header-item-icon']}/>
            <span className={styles['users-table__header-item-title']}>{t('First Name')}</span>
          </div>
          <div>
            <input 
              type='checkbox'
              className={styles['users-table__header-item-input']}
              name='filter'
              value='firstName'
              id='firstName'
            />
            <label htmlFor='firstName' className={styles['users-table__header-item-label']}>
              <TrueIcon className={styles['users-table__header-item-label-icon']}/>
            </label>
          </div>
        </li>
        <li className={styles['users-table__header-item']}>
          <div className={styles['users-table__header-item-title-wrapper']}>
            <TableSettingControlIcon className={styles['users-table__header-item-icon']}/>
            <span className={styles['users-table__header-item-title']}>{t('Email')}</span>
          </div>
          <div>
            <input 
              type='checkbox'
              className={styles['users-table__header-item-input']}
              name='filter'
              value='email'
              id='email'
            />
            <label htmlFor='email' className={styles['users-table__header-item-label']}>
              <TrueIcon className={styles['users-table__header-item-label-icon']}/>
            </label>
          </div>
        </li>
        <li className={styles['users-table__header-item']}>
          <div className={styles['users-table__header-item-title-wrapper']}>
            <TableSettingControlIcon className={styles['users-table__header-item-icon']}/>
            <span className={styles['users-table__header-item-title']}>{t('Working Days')}</span>
          </div>
          <div>
            <input 
              type='checkbox'
              className={styles['users-table__header-item-input']}
              name='filter'
              value='workingDays'
              id='workingDays'
            />
            <label htmlFor='workingDays' className={styles['users-table__header-item-label']}>
              <TrueIcon className={styles['users-table__header-item-label-icon']}/>
            </label>
          </div>
        </li>
        <li className={styles['users-table__header-item']}>
          <div className={styles['users-table__header-item-title-wrapper']}>
            <TableSettingControlIcon className={styles['users-table__header-item-icon']}/>
            <span className={styles['users-table__header-item-title']}>{t('Files')}</span>
          </div>
          <div>
            <input 
              type='checkbox'
              className={styles['users-table__header-item-input']}
              name='filter'
              value='files'
              id='files'
            />
            <label htmlFor='files' className={styles['users-table__header-item-label']}>
              <TrueIcon className={styles['users-table__header-item-label-icon']}/>
            </label>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default UsersTableHeaderSettings