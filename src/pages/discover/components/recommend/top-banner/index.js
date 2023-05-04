import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { Carousel } from 'antd';

import { getTopBannerAction } from '../store/actionCreators'
import { BannerWarpper, Bannerbottom } from './style';

export default memo(function HYTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { topBanners } = useSelector(state => {
    return {
      topBanners: state.get('recommend').get('topBanners')
    }
  }, shallowEqual)
  // console.log(topBanners);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch])

  //antd自带的函数beforeChange，切换之前
  const beforeChange = useCallback((from, to) => {
    // console.log(from,to);
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0)
  }, [])
  //背景图片,后面的参数是为了实现毛玻璃效果
  const bgImg = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'
  // console.log(bgImg);

  const bannerRef = useRef()
  return (
    <BannerWarpper bgImg={bgImg}>
      <div className='banner'>
        <div className='banner_left'>
          <Carousel autoplay beforeChange={beforeChange} ref={bannerRef}>
            {
              topBanners.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.imageUrl} alt={item.typeTitle} className='image' />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className='banner_right'>1</div>
        <Bannerbottom>
          <button className='btn left' onClick={e=>bannerRef.current.prev()}></button>
          <button className='btn right' onClick={e=>bannerRef.current.next()}></button>
        </Bannerbottom>
      </div>
    </BannerWarpper>
  )
})
