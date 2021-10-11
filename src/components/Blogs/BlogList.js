import React from "react";
import Blog from "./Blog"
import {Link} from "react-router-dom"
import {BlogStyle,BlogHeight} from "./CardDesign";
import {NavBtn, NavBtnLink} from "../layout/NavbarElements";
import {VerticalLine} from "../dashboard/DashboardElements";


const BlogList = ({blogs}) => {
    console.log("BLOGS", blogs)
    return(
       <>
         {blogs && blogs.map(blog => {
           return (
               <BlogHeight>
               <BlogStyle key={blog.id}>
               <Link to={"/blog/" + blog.id} style={{  textDecoration: 'none' }}>
                   <Blog blog={blog}  />
               </Link>
              </BlogStyle>

               </BlogHeight>
           )})}

       </>
    );
}

export default BlogList;