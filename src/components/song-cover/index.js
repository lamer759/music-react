import React, { memo } from 'react'

import {SongCoverWrapper} from './style'
import {getCount} from '@/utils/format'
export default memo(function SongCover(props) {
    const {info} = props
    console.log(info);
  return (
    <SongCoverWrapper>
        <div className='cover_top'>
            <img src={info.coverImgUrl} alt={info.name} className='img'/>
            <div className='cover'></div>
            <div className='info'>
                <span>
                    <i className='pos'></i>
                    {getCount(info.playCount)}
                </span>
                <a href="todo" className='action' title='播放'> </a>
            </div>
        </div>
        <div className='cover_bottom'>
            <a href="todo">{info.name}</a>
        </div>
    </SongCoverWrapper>
  )
})
