import React, { memo } from 'react'

import {AppFooterWrapper} from './style'
export default memo(function WYAppFooter() {
  return (
    <AppFooterWrapper>
      <div className='wrap-v1 footer'>
        <ul className='foot_top'>
          <li className='one'>
            <a href="#"></a>
            <span>音乐开放平台</span>
          </li>
          <li>
            <a href="#"></a>
            <span>云村教育所</span>
          </li>
          <li>
            <a href="#"></a>
            <span>音乐开放平台</span>
          </li>
          <li>
            <a href="#"></a>
            <span>用户认证</span>
          </li>
          <li>
            <a href="#"></a>
            <span>音乐交易平台</span>
          </li>
          <li>
            <a href="#"></a>
            <span>赞赏</span>
          </li>
          <li>
            <a href="#"></a>
            <span>视频激励</span>
          </li>
        </ul>
        <div className='foot_foot'>
          <p>服务条款  | 隐私政策 | 儿童隐私政策 | 版权投诉 | 投资者关系 | 广告合作 | 联系我们</p>
          <p>廉政举报 违法和不良信息举报电话：0571-89853516 </p>
          <p>互联网宗教信息</p>
          <p>网易公司版权所有©1997-2020 杭州乐读科技有限公司运营： 浙网文[2018]3506-263号</p>
        </div>
      </div>
    </AppFooterWrapper>
  )
})
