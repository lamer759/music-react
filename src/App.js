import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux/es/exports'

import routes from './router'
import store from './store'
import WYAppHeader from '@/components/app-header'
import WYAppFooter from '@/components/app-footer'
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <WYAppHeader></WYAppHeader>
        {renderRoutes(routes)}
      <WYAppFooter></WYAppFooter>
    </HashRouter>
    </Provider>
    
  )
})

