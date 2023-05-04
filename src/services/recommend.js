import request from "./request";

export function getTopBanners(){
    return request({
        url:'/banner'
    })
}

export function getHotCommend(limit){
    return request({
        url:'/top/playlist',
        params:{
            limit
        }
    })
}

export function getNewAlbums(){
    return request({
        url:'/album/new?limit=10'
    })
}