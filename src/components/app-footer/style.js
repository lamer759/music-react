import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  height: 280px;
  background-color: #f2f2f2;
  .footer {
    padding-top: 33px;
    .foot_top {
        display: flex;
        justify-content: center;
        li {
            margin-left: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            a {
                width: 45px;
                height: 45px;
                background: url(${require('@/assets/img/foot_enter_new2.png')}) -5px -5px ;
                background-size: 220px 220px;
            }
            span {
                font-size: 12px;
                margin-top: 10px;
                color: rgba(0,0,0, 0.5);
            }
            :first-child {
                margin-left: 0px;
            }
        }
        
    }
    .foot_foot {
        padding-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #666;
        font-size: 12px;
        p {
            padding: 5px;
        }
    }
  }
`