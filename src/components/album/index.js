import React, { memo } from 'react'

import {AlbumWrapper} from './style'
export default memo(function Album(props) {
    const {list} = props
  return (
    <AlbumWrapper>
      <div className='album'>
          <div className='album_imgback'>
            <img className='album_img' src={list.blurPicUrl} alt="" />
          </div>
          <div className='album_bottom'>
            <a href="todo" className='album_name'>{list.name}</a>
            <a href="todo">{list.artists[0].name}</a>
          </div>
        </div>
    </AlbumWrapper>
  )
})
