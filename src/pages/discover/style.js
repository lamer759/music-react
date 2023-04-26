import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .discover_top {
    height: 30px;
    background-color: #C20C0C;
    display: flex;
    justify-content: center;
    li {
        padding: 0 15px 0;
        a {
        color: #fff;
        font-size: 12px;
        padding: 0px 15px 2px;
        }
       a:hover , a.active {
            background-color: #9B0909;
            border-radius: 9px;
        }
    }
   
  }
`