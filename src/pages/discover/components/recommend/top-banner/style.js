import styled from "styled-components";

export const BannerWarpper = styled.div`
  background: url(${props => props.bgImg})  center/6000px;
  /* background: ; */
  .banner {
    margin: 0 auto;
    width: 980px;
    height: 285px;
    text-align: center;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .banner_left {
    width: 730px;
    .image {
        width: 100%;
        height: 285px;
    }
    li {
        width: 10px;
        height: 10px;
        button {
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
        button::after {
            color: red;
        }
    }
  }
  .banner_right {
    flex: 1;
    background: url(${require('@/assets/img/download.png')});
  }
`
export const Bannerbottom = styled.div`
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    top: 50%;
    margin-top: -31px;
    background: url(${require('@/assets/img/banner_sprite.png')});
    :hover {
        background-color: rgba(0,0,0,.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }

`