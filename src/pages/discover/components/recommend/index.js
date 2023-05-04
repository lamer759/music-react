import React, { memo } from 'react'

import HYTopBanner from './top-banner'
import HYhotrecommend from './hot-recommend'
import NewAlbum from './new-album'
import Ranking from './ranking'
import { Content, RecomendWrapper, RecommendLeft, RecommendRight } from './style'
export default memo(function WYrecommend() {

  return (
    <RecomendWrapper>
      <HYTopBanner></HYTopBanner>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HYhotrecommend />
          <NewAlbum />
          <Ranking />
        </RecommendLeft>
        <RecommendRight>
          right
        </RecommendRight>
      </Content>
    </RecomendWrapper>
  )
})
