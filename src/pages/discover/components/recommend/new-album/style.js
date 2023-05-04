import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
 .center {
    margin: 20px 0 37px;
    height: 186px;
    background-color:rgb(245, 245, 245);
    border: 1px solid rgb(211, 211, 211);
   .album_car {
    position: relative;
    width: 645px;
    height: 150px;
    margin: 0 auto;
    margin-top: 28px;
    .page {
        display: flex !important;
    }
    .commen {
        position: absolute;
        width: 17px;
        height: 17px;
        top: 50%;
        transform: translateY(-50%);
    }
    .left {
        left: -12px;
        background: url(${require('@/assets/img/sprite_02.png')}) -260px -75px;
    }
    .right {
        right: -12px;
        background: url(${require('@/assets/img/sprite_02.png')}) -300px -75px;

    }
    
   }
 }
`