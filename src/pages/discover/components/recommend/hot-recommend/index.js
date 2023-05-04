import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HYhotrecommendWarpper} from './style'
import SongCover from '@/components/song-cover'
import HYThemeRCM from '@/components/theme-header-rcm'
import {getHotCommendAction} from '@/pages/discover/components/recommend/store/actionCreators'
export default memo(function HYhotrecommend() {

  //取出state中的数据
  const {hotRecommend} = useSelector(state=>({
    hotRecommend : state.getIn(['recommend','hotRecommend'])
  }),shallowEqual)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getHotCommendAction(8))
  },[dispatch])
  return (
    <HYhotrecommendWarpper>
      <HYThemeRCM title='热门推荐' keywords={['华语','流行','摇滚','民谣','电子']} />
      <div className='recomend_list'>
          {
            hotRecommend.map((item,index)=>{
              return <SongCover key={item.id} info={item}></SongCover>
            })
          }
      </div>

    </HYhotrecommendWarpper>
  )
})
