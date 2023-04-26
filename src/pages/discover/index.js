import React, { memo,useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import { DiscoverWrapper } from './style'
import {dicoverMenu} from '@/common/local-data'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'
import request from '@/services/request'
export default memo(function WYdiscover(props) {

  useEffect(()=>{
    axios.get(`http://123.207.32.32:9001/lyric?id=500665346`).then(res=>{
      console.log(res);
    },err=>console.log(err))
  })
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
