import React from "react";
import {
    NavBtn, NavBtnLink, NavItem,
    NavLink
} from "../layout/NavbarElements";

const NavSignOut = () => {
    return(
        <>
            <NavItem>
                <NavLink to='/#'> HOME </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/signin'> SIGN IN </NavLink>
            </NavItem>
            <NavBtn>
                <NavBtnLink to='/signup'> GET STARTED </NavBtnLink>
            </NavBtn>
        </>
    );
}

export default NavSignOut;