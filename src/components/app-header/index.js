import React, { memo } from 'react'
import { headerLinks } from '@/common/local-data'

import { NavLink } from 'react-router-dom';
import { HeaderWrapper, HeaderRight, HeaderLeft } from './style'

export default memo(function WYAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='icon'></i>
        </NavLink>
      )
    } else {
      return <a href="#">{item.title}</a>
    }

  }
  return (
    <HeaderWrapper>
      <div className='center'>
        <HeaderLeft>
          <ul>
            <a href="#" className='add_img'></a>
            {
              headerLinks.map((item, index) => {
                return (
                  <li key={index}>
                    {showSelectItem(item, index)}
                  </li>
                )
              })
            }
            {/* <li><a href="#">发现音乐</a></li>
          <li><a href="#">我的音乐</a></li>
          <li><a href="#">关注</a></li>
          <li><a href="#">商城</a></li>
          <li><a href="#">音乐人</a></li>
          <li><a href="#">下载客户端</a></li> */}
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <input type="text" placeholder='音乐/视频/电台/用户' />
          <div className='text_right'> <a href="#">创作者中心</a> </div>
          <div className='text_dengl'><a href="#">登录</a></div>
        </HeaderRight>
      </div>
      <div className='bottom'></div>
    </HeaderWrapper>
  )
})
