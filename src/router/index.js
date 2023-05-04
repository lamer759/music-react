import React from 'react';
import { Redirect } from "react-router-dom";

import WYdiscover from '@/pages/discover'
import WYfriend from '@/pages/friend'
import WYmine from '@/pages/mine'
import WYrecommend from '@/pages/discover/components/recommend'

const routes = [
    {
        path:'/',
        exact:true,
        // component:WYdiscover,
        render:()=> <Redirect to="/discover"/>
    },{
        path:'/discover',
        component:WYdiscover,
        routes:[
            {
                path:'/discover',
                exact:true,
                render :()=> <Redirect to="/discover/recommend"/>
                
            },{
                path:'/discover/recommend',
                component : WYrecommend,
            }
        ]
    },{
        path:'/mine',
        component:WYmine,
    },{
        path:'/friend',
        component: WYfriend,
    }
]

export default routes
