import React from 'react'
import styles from './Statistics.module.css'
import statisticsImage from 'assets/imgs/statisticsImage.png'
import { useTranslation } from 'react-i18next'
function Statistics() {
  const {t} = useTranslation()
  return (
    <div className={styles['statistics']}>
      <h2 className={styles['statistics__title']}>{t('Statistics')}</h2>
      <img 
        src={statisticsImage}
        className={styles['statistics__info-image']}
        alt='Statistics person image'
      />
      <div className={styles['statistics__info-wrapper']}>
        <div className={styles['statistics__info-item-wrapper']}>
          <div className={styles['statistics__info-item-content-wrapper']}>
            <h3 className={styles['statistics__info-item-title']}>{t('Choice No')} 1</h3>
            <p className={styles['statistics__info-item-info']}>254</p>
          </div>
        </div>
        <div className={styles['statistics__info-item-wrapper']}>
          <div className={styles['statistics__info-item-content-wrapper']}>
            <h3 className={styles['statistics__info-item-title']}>{t('Choice No')} 2</h3>
            <p className={styles['statistics__info-item-info']}>254</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics