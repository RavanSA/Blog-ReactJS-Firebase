import React from "react";
import {SidebarMenu,
    SidebarLink} from "../layout/SidebarElements";
import {signoutaction} from "../store/action/authaction"
import {connect} from "react-redux";

const SideBarSignIn = (props) => {
    return(
        <>
            <SidebarMenu>
                <SidebarLink to="/#">Home</SidebarLink>
                <SidebarLink to="/newblog">New Blog</SidebarLink>
                <SidebarLink onClick={props.signOut} to="/#">Logout</SidebarLink>
            </SidebarMenu>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signoutaction())
    }
}

export default connect(null,mapDispatchToProps)(SideBarSignIn);