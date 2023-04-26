import styled from "styled-components"

//用一个Wrapper组件包裹，那么避免了样式冲突
// const change_height = function(height){
//     return `calc(100vh * calc(${height} / 1080) )`
// }
// const change_width = function(height){
//     return `calc(100vh * calc(${height} / 1920) )`
// }
export const HeaderWrapper = styled.div`
 background-color : #242424;
 height: 75px;
  .center {
  width: 1100px;
  height: 70px;
  margin: 0 auto;
  background-color : #242424;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  .bottom {
    height: 5px;
    background-color:#C20C0C;
  }
 
`

export const HeaderLeft = styled.div`
   ul {
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;
    .add_img {
        width: 157px;
        height: 100%;
        background: url(${require("@/assets/img/sprite_01.png")});
        background-position: 0px 214px;
        margin-right: 20px;
    }
    li {
        position: relative;
        /* padding: 0 20px 0 ; */
        line-height: 70px;
        a {
            display: block;
            /* position: relative; */
            width: 100%;
            color: #fff;
            padding: 0 20px 0;
        }
    }
    /* 点击a链接时样式不消失 */
    a:hover ,a.active{
        background-color: #000;
    }
    /* 当a链接被激活时，会自动加上active样式 */
    .active .icon {
        position: absolute;
        display: inline-block;
        bottom: 1px;
        left: 50%;
        transform: translate(-50%,0);

        width: 0px;
        height: 0px;
        border: 7px solid transparent;
        border-bottom-color: #C20C0C;
    }
   }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  input {
    background-color: #fff;
    height: 32px;
    width: 158px;
    border-radius: 15px;
    font-size: 14px;
    padding-left: 10px;
  }
  a {
        color: #fff;
        font-size: 12px;
    }
  .text_right{
    height: 32px;
    border: 1px solid #4F4F4F;
    border-radius: 15px;
    padding: 5px 15px 5px;
    margin-left: 12px;
  }
  .text_dengl {
    width: 30px;
    height: 30px;
    border:1px solid #4F4F4F ;
    border-radius: 15px;
    /* padding: 5px 15px 5px; */
    text-align: center;
    line-height: 25px;
    margin-left: 20px;
  }
`