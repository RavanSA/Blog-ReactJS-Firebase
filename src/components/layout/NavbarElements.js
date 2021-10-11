import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-router-dom";
import {BiSearch} from "react-icons/bi"


export const Nav =styled.nav`
  background: #000;
  height: 70px;
  width: 100%;
  //margin-top: -9px;
 //margin-left: -9px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  z-index: 10;
 
 @media screen and (max-width: 960px){
   transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
 width: 100%; 
 display: flex;
 justify-content: center;
 height: 80px;
 z-index: 1;
 padding: 0 24px;
 max-width: 1500px;
`

export const NavLogo = styled.div`
 color: #fff;
 //justify-self: flex-start;
 cursor: pointer;
 font-size: 2rem;
 margin-left: 100px;
 display: flex;
 align-items: center;
 font-weight: bold;
 text-decoration: none;
 justify-content: flex-end;
 `

export const Mobile = styled.div`
 display: none;
 
 @media screen and (max-width: 768px){
  display: block;
  position: absolute;
  top: 20px;
  right: 20px;
  transfrom: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
 }
 `

export const NavMenu = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 text-space: 20px;
 @media screen and (max-width: 768px){
  display: none;
 }
 `

export const NavItem =styled.li`
 height: 80px;
 font-weight: bold;
 margin-right: 20px;
`

export const NavBtnContainer = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
`


export const NavLink = styled(LinkS)`
 
 color: #fff;
 display: flex;
align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
cursor: pointer;
 
 &.active {
  border-bottom: 3px solid #01bf71;
 }
`

export const NavBtn = styled.nav`
 display: flex;
 align-items: center;
 //@media screen and (max-width: 768px){
 // display: none;
 //}
 `

export const NavBtnLink = styled(LinkR)`
 border-radius: 50px;
 background: #01bf71;
 white-space: nowrap;
 padding: 10px 22px;
 color: #010606;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;

 &:hover{
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
 }
 
`
export const SearchBoxButtonContainer = styled.div`
 width: fit-content;
 height: fit-content;
 position: relative;
 margin-left: 10px;
 margin-top: 5px;
 box-sizing: border-box;

`


export const SearchInput = styled.input`
 height: 50px;
 width: 75px;
 border-style: none;
 padding: 10px;
 font-size: 18px;
 letter-spacing: 2px;
 outline: none;
 border-radius: 25px;
 transition: all .5s ease-in-out;
 background-color: black;
 padding-right: 40px;
 color:#fff;
 cursor: pointer;
 
 &::placeholder{
  color:white;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
 }
 
 &:focus {
  width: 300px;
  border-radius: 0px;
  cursor: auto;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  
  
 }
`
export const SearchBoxButton = styled.div`
 width: 50px;
 height: 50px;
 border-style: none;
 font-size: 20px;
 font-weight: bold;
 outline: none;
 cursor: pointer;
 border-radius: 50%;
 position: absolute;
 right: 0px;
 color:#ffffff ;
 background-color:black;
 pointer-events: painted;
 
 &:focus{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
 }
 &:focus + ${SearchInput}{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
`