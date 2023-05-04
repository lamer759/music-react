import styled from "styled-components";

export const SongCoverWrapper = styled.div`
 width: 140px;
 margin-bottom: 30px;
 .cover_top {
    position: relative;
    height: 140px;
    .img {
    height: 100%;
    }
    .cover {
        position: absolute;
        width: 100%;
        height: 100%;
        /* background-color: pink; */
        top: 0;
        right: 0;
        background: url(${require('@/assets/img/sprite_cover.png')}) no-repeat 0px 0px;
    }
    .info {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        padding: 0 10px 0 ;
        right: 0;
        bottom: 0;
        height: 27px;
        width: 100%;
        color: #ccc;
        background: url(${require('@/assets/img/sprite_cover.png')}) 0px 957px;
        .pos {
            display: inline-block;
            width: 14px;
            height: 14px;
            margin-right: 5px;
            background: url(${require('@/assets/img/sprite_icon.png')}) 0px -20px;
        }
        .action {
            width: 16px;
            height: 17px;
            background: url(${require('@/assets/img/sprite_icon.png')}) 0px 1px;
        }
        .action:hover {
            background: url(${require('@/assets/img/sprite_icon.png')}) 0px -59px;
        }
    }
 }
 
 .cover_bottom {
    a {
        font-size: 14px;
        color: black;
    }
 }
`