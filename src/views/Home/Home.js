import React from 'react'
import { useTranslation } from 'react-i18next'
import { MetaTags } from 'react-meta-tags'
import {motion} from 'framer-motion'
import { Col, Row } from 'react-bootstrap'
import FirstPerson from 'components/Home/FirstPerson/FirstPerson'
import Statistics from 'components/Home/Statistics/Statistics'
import Readings from 'components/Home/Readings/Readings'
import styles from './Home.module.css'
import UsersTable from 'components/Home/UsersTable/UsersTable/UsersTable'
import Comments from 'components/Home/Comments/Comments/Comments'

function Home() {
  const {t} =useTranslation()
  return (
    <>
    <motion.div 
      init={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
        <MetaTags>
              <title>{t('Level Task')}</title>
        </MetaTags>
        <Row>
          <Col lg='9' className={styles['home__col--pading']}>
            <Row>
              <Col lg='4' sm='6' className='mb-3'>
                <FirstPerson/>
              </Col>
              <Col lg='4' sm='6' className='mb-3'>
                <Statistics/>
              </Col>
              <Col lg='4' md='12' className='mb-3'>
                <Readings/>
              </Col>
              <Col lg='12' className='mb-3'>
                <UsersTable/>
              </Col>
            </Row>
          </Col>
          <Col lg='3' className={styles['home__col--bg']}>
            <Comments/>
          </Col>
        </Row>
    </motion.div>
    </>
  )
}

export default Home