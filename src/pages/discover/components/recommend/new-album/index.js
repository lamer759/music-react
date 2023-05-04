import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd';

import HYThemeRCM from '@/components/theme-header-rcm'
import { NewAlbumWrapper } from './style'
import Album from '@/components/album'
import { getNewAlbumAction } from '@/pages/discover/components/recommend/store/actionCreators'

export default memo(function NewAlbum() {
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbum'])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction())
  }, [dispatch])

  const pageRef = useRef()
  return (
    <NewAlbumWrapper>
      <HYThemeRCM title='新碟上架' />
      <div className='center'>
        <div className='album_car'>
          <button className='left commen' onClick={e=>pageRef.current.prev()}></button>
          <button className='right commen' onClick={e=>pageRef.current.next()}></button>

          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className='page'>
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return <Album key={iten.id} list={iten}></Album>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </div>
    </NewAlbumWrapper>
  )
})
