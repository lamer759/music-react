import React, { memo,useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import { DiscoverWrapper } from './style'
import {dicoverMenu} from '@/common/local-data'
import { renderRoutes } from 'react-router-config'


export default memo(function WYdiscover(props) {

  const {route} = props

  return (
    <DiscoverWrapper>
      <div className='discover_top'>
        
        {
           dicoverMenu.map((item,index)=>{
            return <li key={index}><NavLink to={item.link}>{item.title}</NavLink></li>
           })
        }
        
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
