import React, {useRef} from "react";
import {Nav,
        NavbarContainer,
        NavLogo,
        Mobile,
        NavMenu,
        SearchBoxButtonContainer,
        SearchBoxButton,
        SearchInput} from "./NavbarElements";
import {FaBars} from "react-icons/fa"
import {BiSearch} from "react-icons/bi"
import {connect} from "react-redux"
import NavSignIn from "../auth/NavSignIn";
import NavSignOut from "../auth/NavSignOut";
import {useState} from "react";
import SearchBox from "./SearchBox";

const Navbar = ({toggle}) => {

    const authStatus = JSON.parse(localStorage.getItem('LoginStatus'));
    console.log("AA",authStatus)
    const signCheck = authStatus.uid ? <NavSignIn/> : <NavSignOut/>;
    // const [placeholderText, setPlaceholderText] = useState(true);
    // const [searchValue,setSearchValue] = useState("");
    // const inputRef = useRef();
    // console.log("INPUTREF",inputRef)

    // const onClickHandler = (e) => {
    //     setPlaceholderText(!placeholderText)
    // }
    //
    // const onValueHandler = (e) => {
    //     setSearchValue(e.target.value);
    // }

    // console.log("SEARCH VALUE",searchValue)

    return(
      <>
          <Nav>
              <NavLogo> Blogs</NavLogo>
              <NavbarContainer>
                  <Mobile onClick={toggle}>
                      <FaBars/>
                  </Mobile>
                  <NavMenu>
                      {signCheck}
                  </NavMenu>
                  {/*<SearchBoxButtonContainer>*/}
                  {/*    <SearchInput type="text" id="search" placeholder={placeholderText ?  "Search" : "Type to search"}*/}
                  {/*                 onFocus={onClickHandler}*/}
                  {/*                  onBlur={onClickHandler}*/}
                  {/*                  onChange={onValueHandler}*/}
                  {/*                  />*/}
                  {/*    <SearchBox />*/}
                  {/*</SearchBoxButtonContainer>*/}
              </NavbarContainer>
          </Nav>
      </>
    );
}

const mapStateToProps = (state) => {
    localStorage.setItem('LoginStatus', JSON.stringify(state.firebaseReducer.auth));
    return {
        auth: state.firebaseReducer.auth
    }
}

export default connect(mapStateToProps)(Navbar);