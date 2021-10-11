import React from "react";
import {NavItem,
        NavLink} from "../layout/NavbarElements";
import {signoutaction} from "../store/action/authaction"
import {connect} from "react-redux";

const NavSignIn = (props) => {
    return(
        <>
            <NavItem>
                <NavLink to='/#'> HOME </NavLink>
            </NavItem>
        <NavItem>
            <NavLink to='/newblog'> NEW BLOG </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={props.signOut} to="/#" >LOGOUT</NavLink>
        </NavItem>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signoutaction())
    }
}

export default connect(null,mapDispatchToProps)(NavSignIn);