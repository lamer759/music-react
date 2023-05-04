import styled from "styled-components";

export const HYthemeRCMWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 height: 33px;
 background-position: -225px -158px;
 padding: 0 10px 0px 34px;
 border-bottom: 2px solid rgb(193, 13, 12);
 .left {
    display: flex;
    .title {
        font-size: 20px;
        font-weight: 400;
        margin-right: 20px;
    }
    .keyword {
        display: flex;
        margin-top: 5px;
        .items {
            .divider {
                color: #ccc;
                font-size: 12px;
                margin: 0 10px 0;
            }
        }
    }
 }
 .right {
    margin-top: 5px;
 }
`
