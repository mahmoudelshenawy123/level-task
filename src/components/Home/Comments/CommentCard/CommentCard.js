import React from 'react'
import styles from './CommentCard.module.css'
import {ReactComponent as LeftArrowIcon} from 'assets/icons/leftArrowIcon.svg'
import {ReactComponent as ClockIcon} from 'assets/icons/clockIcon.svg'
import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'
import { Link } from 'react-router-dom'
function CommentCard({comment}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
} =useSortable({id:comment?.id})
const style = {
    backgroundColor:comment?.bgColor,
    '--text-color':comment?.textColorType==='dark'?'white':'#1C1C28',
    transform:CSS.Transform.toString(transform),
    transition
}
  return (
    <div className={styles['comments__item']} ref={setNodeRef} style={style}  {...listeners} {...attributes}  >
      <h3 className={styles['comments__item-title']}>{comment?.name} {comment?.id}</h3>
      <p className={styles['comments__item-info']}>
        <ClockIcon className={styles['comments__item-info-icon']}/>
        {comment?.time}
      </p>
      <div className={styles['comments__item-info-details']}>
        <p className={styles['comments__item-user-info']}>
          <img 
          src={comment?.user?.image}
          className={styles['comments__user-image']}
          alt='comment user'
          />
          {comment?.user?.name}
        </p>
        <Link to={comment?.link} className={styles['comments__link']}>
          <LeftArrowIcon className={styles['comments__link-icon']}/>
          <LeftArrowIcon className={styles['comments__link-icon--light']}/>
        </Link>
      </div>
    </div>
  )
}

export default CommentCard