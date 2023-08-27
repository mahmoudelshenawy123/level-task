import React, { useState } from 'react'
import styles from './UsersTable.module.css'
import tableFileImg from 'assets/imgs/tableFileImg.png'
import tableFileImgPdf from 'assets/imgs/tableFileImgPdf.png'
import {ReactComponent as SettingMenuIconLight} from 'assets/icons/settingMenuIconLight.svg'
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next'
import UsersTableHeader from '../UsersTableHeader/UsersTableHeader';
import UsersTableFooter from '../UsersTableFooter/UsersTableFooter'
import UsersTableRow from '../UsersTableRow/UsersTableRow'
import {
  DndContext,
  closestCenter
}from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
}from '@dnd-kit/sortable'
import UsersTableHeaderSettings from '../UsersTableHeaderSettings/UsersTableHeaderSettings'
function UsersTable() {
  const {t} = useTranslation()
  const [isMenuActive ,setIsMenuActive]=useState(false)
  const [users ,setUsers]=useState([
    {
      id:1,
      name:'اسم افراضى جديد جدا جدا اوى',
      email:'Example@company.com',
      working_days:['Sa','Su','Th','Fr'],
      file:{
        name:'واجهة المستخدم .png',
        image:tableFileImg,
        size:'9mb'
      }
    },
    {
      id:2,
      name:'3 اسم إفتراضي جديد',
      email:'Example2@company.com',
      working_days:['Sa','We','Th','Fr'],
      file:{
        name:'2واجهة المستخدم .png',
        image:tableFileImg,
        size:'2mb'
      }
    },
    {
      id:3,
      name:'2 اسم إفتراضي جديد',
      email:'Example3@company.com',
      working_days:['We','Su','Th','Fr'],
      file:{
        name:'3واجهة المستخدم .png',
        image:tableFileImgPdf,
        size:'19mb .PDF'
      }
    },
    {
      id:4,
      name:'اسم إفتراضي جديد',
      email:'Example@company.com',
      working_days:['Sa','Su','Th','Fr'],
      file:{
        name:'واجهة المستخدم .png',
        image:tableFileImg,
        size:'9mb'
      }
    },
    {
      id:5,
      name:'3 اسم إفتراضي جديد',
      email:'Example2@company.com',
      working_days:['Sa','We','Th','Fr'],
      file:{
        name:'2واجهة المستخدم .png',
        image:tableFileImg,
        size:'2mb'
      }
    },
    {
      id:6,
      name:'2 اسم إفتراضي جديد',
      email:'Example3@company.com',
      working_days:['We','Su','Th','Fr'],
      file:{
        name:'3واجهة المستخدم .png',
        image:tableFileImgPdf,
        size:'19mb .PDF'
      }
    },
    {
      id:7,
      name:'اسم إفتراضي جديد',
      email:'Example@company.com',
      working_days:['Sa','Su','Th','Fr'],
      file:{
        name:'واجهة المستخدم .png',
        image:tableFileImg,
        size:'9mb'
      }
    },
    {
      id:8,
      name:'3 اسم إفتراضي جديد',
      email:'Example2@company.com',
      working_days:['Sa','We','Th','Fr'],
      file:{
        name:'2واجهة المستخدم .png',
        image:tableFileImg,
        size:'2mb'
      }
    },
    {
      id:9,
      name:'2 اسم إفتراضي جديد',
      email:'Example3@company.com',
      working_days:['We','Su','Th','Fr'],
      file:{
        name:'3واجهة المستخدم .png',
        image:tableFileImgPdf,
        size:'19mb .PDF'
      }
    },
  ])
  let handleDragEnd =(event)=>{
    const {active,over} =event
    if(active.id!==over.id){
      setUsers(item=>{ 
      const activeIndex = active.data.current.sortable.index
      const overIndex = over.data.current.sortable.index
      return arrayMove(item,activeIndex,overIndex)
    })
    }
  }
  return (
    <div >
      <UsersTableHeader/>
      <Table className={styles['table']} responsive>
        <thead className={styles['table__header']}>
          <tr>
            <th className={styles['table__header-item']}>{t('Id No')}</th>
            <th className={styles['table__header-item']}>{t('Full Name')}</th>
            <th className={styles['table__header-item']}>{t('Email')}</th>
            <th className={styles['table__header-item']}>{t('Working Days')}</th>
            <th className={styles['table__header-item']}>{t('Files')}</th>
            <th className={styles['table__header-item--relative']}>
              <button onClick={()=>setIsMenuActive(prevVal=>!prevVal)} className={styles['table__header-filter-button']}>
                <SettingMenuIconLight className={styles['table__header-filter-button-icon']}/>
              </button>
              <UsersTableHeaderSettings isMenuActive={isMenuActive}/>
            </th>
          </tr>
        </thead>
        <tbody>
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext 
              items={users?.map((i) => i?.id)}
              strategy={verticalListSortingStrategy}
              >
                {
                    users&&users?.map((user)=>(
                      <UsersTableRow key={user?.id} user={user}/>
                    ))
                }
            </SortableContext>
          </DndContext>
        </tbody>
      </Table>
      <UsersTableFooter/>
    </div>
  )
}

export default UsersTable