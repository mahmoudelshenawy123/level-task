import React, { useState } from 'react'
import styles from './Comments.module.css'
import commentsImage from 'assets/imgs/commentsImage.png'
import commentsImage2 from 'assets/imgs/commentsImage2.png'
import commentsImage3 from 'assets/imgs/commentsImage3.png'
import commentsImage4 from 'assets/imgs/commentsImage4.png'
import { useTranslation } from 'react-i18next'

import {
  DndContext,
  closestCenter
}from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
}from '@dnd-kit/sortable'
import CommentCard from '../CommentCard/CommentCard'
function Comments() {
  const {t} = useTranslation()
  const [comments,setComments] = useState([
    {
      id:1,
      name:t('There is a long proven fact that content'),
      time:'05:00 - 06:00',
      user:{
        name:'',
        image:commentsImage
      },
      link:'',
      bgColor:'#F2F5F1'
    },
    {
      id:2,
      name:t('There is a long proven fact that content'),
      time:'05:00 - 06:00',
      user:{
        name:'ميرا محسن',
        image:commentsImage2
      },
      link:'',
      bgColor:'#FFF6E3',
    },
    {
      id:3,
      name:t('There is a long proven fact that content'),
      time:'05:00 - 06:00',
      user:{
        name:'محمود الغريب',
        image:commentsImage3
      },
      link:'',
      bgColor:'#7661E2',
      textColorType:'dark'
    },
    {
      id:4,
      name:t('There is a long proven fact that content'),
      time:'05:00 - 06:00',
      user:{
        name:'كريم عبد العزيز',
        image:commentsImage4
      },
      link:'',
      bgColor:'#F1ECFE'
    },
  ])
  let handleDragEnd =(event)=>{
    const {active,over} =event
    if(active.id!==over.id){
      setComments(item=>{ 
      const activeIndex = active.data.current.sortable.index
      const overIndex = over.data.current.sortable.index
      return arrayMove(item,activeIndex,overIndex)
    })
    }
  }
  return (
    <div className={styles['comments']}>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={comments?.map((i) => i?.id)}
          strategy={verticalListSortingStrategy}
          >
            {
                comments&&comments?.map((comment)=>(
                  <CommentCard key={comment?.id} comment={comment}/>
                ))
            }
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default Comments