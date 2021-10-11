import React from "react";
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        SidebarLink,
        SideBtnWrap,
        SidebarRoute} from "./SidebarElements";
import SideBarSignIn from "../auth/SideBarSignIn";
import SideBarSignOut from "../auth/SideBarSignOut";

const Sidebar = ({open, toggle}) => {
    const authStatus = JSON.parse(localStorage.getItem('LoginStatus'));
    const signCheck = authStatus.uid ? <SideBarSignIn/> : <SideBarSignOut/>
    return(
        <SidebarContainer open={open} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                {signCheck}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;