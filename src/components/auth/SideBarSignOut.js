import React from "react";
import {SidebarMenu,
    SidebarLink} from "../layout/SidebarElements";

const SideBarSignOut = () => {
    return(
        <>
            <SidebarMenu>
                <SidebarLink to="/#">Home</SidebarLink>
                <SidebarLink to="/signin">Sign In</SidebarLink>
                <SidebarLink to="/signup">Sign Up</SidebarLink>
            </SidebarMenu>
        </>
    );
}

export default SideBarSignOut;
