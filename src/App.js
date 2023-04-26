import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import WYAppHeader from '@/components/app-header'
import WYAppFooter from '@/components/app-footer'
export default memo(function App() {
  return (
    <HashRouter>
      <WYAppHeader></WYAppHeader>
        {renderRoutes(routes)}
      <WYAppFooter></WYAppFooter>
    </HashRouter>
  )
})

