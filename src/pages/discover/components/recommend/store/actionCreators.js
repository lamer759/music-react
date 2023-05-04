import * as actionTypes from './contants'
import { getTopBanners ,getHotCommend,getNewAlbums} from '@/services/recommend'

const changeTopBannerAction = (res)=>({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})
const changeHotRecommend = (res)=>({
    type : actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommend : res.playlists
})
const changeNewAlbum = (res)=>({
    type : actionTypes.CHANGE_NEWAlBUM,
    newAlbum : res.albums
})
export const getTopBannerAction = ()=>{
    return dispatch=>{
        getTopBanners().then(res=>{
            dispatch(changeTopBannerAction(res.data))
            console.log(res.data);
        })
    }
}
export const getHotCommendAction = (limit)=>{
    return dispatch=>{
        getHotCommend(limit).then(res=>{
            //存到state中
            dispatch(changeHotRecommend(res.data))
            console.log(res.data);
        })
    }
}
export const getNewAlbumAction = ()=>{
    return dispatch=>{
        getNewAlbums().then(res=>{
            dispatch(changeNewAlbum(res.data))
            console.log(res.data);
        })
    }
}