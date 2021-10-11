import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Home = () => {

    const [open,setOpen ] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }

    return(
        <>
      <Sidebar open={open} toggle={toggle}/>
      <Navbar toggle={toggle}/>
        </>
    );
}

export default Home;