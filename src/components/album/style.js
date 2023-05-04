import styled from "styled-components";

export const AlbumWrapper = styled.div`
  .album {
        margin-left: 10px;
        width: 118px;
        .album_imgback {
            background: url(${require('@/assets/img/sprite_cover.png')}) 0px -566px;
            .album_img {
            height: 100px;
            width: 100px;
        }
        }
        .album_bottom {
            display: flex;
            flex-direction: column;
            .album_name {
                height: 19px;
                overflow: hidden;
                margin-top: 7px;
                color: black;
            }
        }
    }
`