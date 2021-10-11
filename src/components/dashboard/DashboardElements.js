import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height:5% ;
  margin-left: 40px;
  @media screen and (max-width: 900px){
    margin-left: 15px;
  }
`

export const VerticalLine = styled.div`
  background: #000000;
  width: 1px;
  height: 150px;
  margin: 0 auto;
`

export const DashboardCol = styled.div`
  width: 80%;
  margin: 10px;
  line-height: 75px;
  font-size: 19px;
  height: 10%;
  @media screen and (max-width: 900px){
    width: 80%;
  }
`
export const DashboardCol2 = styled.div`
  width: 30%;
  margin-top: 10px;
  line-height: 75px;
  font-size: 19px;
  @media screen and (max-width: 900px){
    display: none;
    width: 20%;
  }
`
