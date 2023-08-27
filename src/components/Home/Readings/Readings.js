import React from 'react'
import styles from './Readings.module.css'
import {ReactComponent as TimerIcon} from 'assets/icons/timerIcon.svg'
import {ReactComponent as CalenderIcon} from 'assets/icons/calenderIcon.svg'
import {ReactComponent as TrueCircleIcon} from 'assets/icons/trueCircleIcon.svg'
import { useTranslation } from 'react-i18next'
function Readings() {
  const {t} = useTranslation()
  return (
    <div className={styles['readings']}>
      <div className={styles['readings__item']}>
        <h3 className={styles['readings__item-title']}>{t('Other Readings')}</h3>
        <p className={styles['readings__item-count']}>
          <TimerIcon className={styles['readings__item-count-icon']}/>
          50
        </p>
      </div>
      <div className={styles['readings__item']}>
        <h3 className={styles['readings__item-title']}>{t('Other Readings')}</h3>
        <p className={styles['readings__item-count']}>
          <CalenderIcon className={styles['readings__item-count-icon']}/>
          50
        </p>
      </div>
      <div className={styles['readings__item']}>
        <h3 className={styles['readings__item-title']}>{t('Other Readings')}</h3>
        <p className={styles['readings__item-count']}>
          <TrueCircleIcon className={styles['readings__item-count-icon']}/>
          24
        </p>
      </div>
    </div>
  )
}

export default Readings