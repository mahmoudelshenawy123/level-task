import React from 'react'
import styles from './UsersTableRow.module.css'
import {ReactComponent as TableDotsIcon} from 'assets/icons/tableDotsIcon.svg'
import { useTranslation } from 'react-i18next'
import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'
function UsersTableRow({user}) {
  const {t} = useTranslation()
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
} =useSortable({id:user?.id})
const style = {
    transform:CSS.Transform.toString(transform),
    transition
}
  return (
    <tr ref={setNodeRef} style={style}  {...listeners} {...attributes} className={styles['table__tbody-row']}>
      <td className={`${styles['table__tbody-item']} ${styles['table__tbody-item--id']}`}>{user?.id}</td>
      <td className={`${styles['table__tbody-item']} ${styles['table__tbody-item--tooltip-hover']}`}>
        {
          user?.name?.length>20&&<div className={`${styles['table__tbody-item-tooltip']}`}>{user?.name}</div>
        }
        {
        user?.name?.split('')?.filter((letter,index)=>(
          index<20 &&letter
        ))?.join('')
        }
        {
          user?.name?.length>20 &&'....'
        }
      </td>
      <td className={`${styles['table__tbody-item']}`}>{user?.email}</td>
      <td className={`${styles['table__tbody-item']}`}>
        <div className={`${styles['table__tbody-item-days-wrapper']}`}>
          <div className={`${styles['table__tbody-item-day']} ${user?.working_days?.includes('Sa')&&styles['table__tbody-item-day--active']}`}>{t('Sa')}</div>
          <div className={`${styles['table__tbody-item-day']} ${user?.working_days?.includes('Su')&&styles['table__tbody-item-day--active']}`}>{t('Su')}</div>
          <div className={`${styles['table__tbody-item-day']} ${user?.working_days?.includes('MO')&&styles['table__tbody-item-day--active']}`}>{t('MO')}</div>
          <div className={`${styles['table__tbody-item-day']} ${user?.working_days?.includes('Tu')&&styles['table__tbody-item-day--active']}`}>{t('Tu')}</div>
          <div className={`${styles['table__tbody-item-day']} ${user?.working_days?.includes('We')&&styles['table__tbody-item-day--active']}`}>{t('We')}</div>
          <div className={`${styles['table__tbody-item-day']} ${user?.working_days?.includes('Th')&&styles['table__tbody-item-day--active']}`}>{t('Th')}</div>
          <div className={`${styles['table__tbody-item-day']} ${user?.working_days?.includes('Fr')&&styles['table__tbody-item-day--active']}`}>{t('Fr')}</div>
        </div>
      </td>
      <td className={`${styles['table__tbody-item']}`}>
        <div className={`${styles['table__tbody-item-file-wrapper']}`}>
          <img 
            src={user?.file?.image}
            alt='table file img'
            className={`${styles['table__tbody-item-file-img']}`}
          />
          <div className={`${styles['table__tbody-item-file-info-wrapper']}`}>
            <h2 className={`${styles['table__tbody-item-file-title']}`}>{user?.file?.name}</h2>
            <h3 className={`${styles['table__tbody-item-file-details']}`}>{user?.file?.size}</h3>
            <p></p>
          </div>
        </div>
      </td>
      <td className={`${styles['table__tbody-item']}`}>
        <button className={`${styles['table__tbody-dots-button']}`}>
          <TableDotsIcon/>
        </button>
      </td>
    </tr>
  )
}

export default UsersTableRow