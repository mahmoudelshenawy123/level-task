import React from 'react'
import styles from './FirstPerson.module.css'
import FirstPersonImage from 'assets/imgs/FirstPersonImage.png'
import {ReactComponent as DownArrowIcon} from 'assets/icons/downArrowIcon.svg'

import { useTranslation } from 'react-i18next'
function FirstPerson() {
  const {t} = useTranslation()
  return (
    <div className={styles['first-person']}>
      <div className={styles['first-person__header']}>
        <h2 className={styles['first-person__title']}>{t('First Person')}</h2>
        <p className={styles['first-person__date']}>
          {t('May 10-June 10')}
          <DownArrowIcon className={styles['first-person__date-icon']}/>
        </p>
      </div>
      <div className={styles['first-person__info-wrapper']}>
        <div className={styles['first-person__info-content-wrapper']}>
          <div className={styles['first-person__info-item-wrapper']}>
            <h3 className={styles['first-person__info-item-title']}>{t('Reading No')} 1</h3>
            <p className={styles['first-person__info-item-info']}>254</p>
          </div>
          <div className={styles['first-person__info-item-wrapper']}>
            <h3 className={styles['first-person__info-item-title']}>{t('Reading No')} 2</h3>
            <p className={styles['first-person__info-item-info']}>254</p>
          </div>
          <div className={styles['first-person__info-item-wrapper']}>
            <h3 className={styles['first-person__info-item-title']}>{t('Reading No')} 3</h3>
            <p className={styles['first-person__info-item-info']}>254</p>
          </div>
        </div>
        <img 
          src={FirstPersonImage}
          className={styles['first-person__info-image']}
          alt='first person image'
        />
      </div>
    </div>
  )
}

export default FirstPerson