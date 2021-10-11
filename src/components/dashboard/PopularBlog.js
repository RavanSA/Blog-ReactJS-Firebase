import React from "react";
import {PopularBlogContainer,
        PopImage,
        PopTitle,
        PopContent,
        PopBlog} from "../Blogs/CardDesign";
import {Link} from "react-router-dom";

const PopularBlog = ({title,content,imageUrl,id}) => {

    const shortContent = content.slice(0,20);
    return (
            <>
                <Link to={"/blog/" + id} style={{  textDecoration: 'none' }}>
                <PopularBlogContainer>
                <PopImage src={imageUrl}/>
                    <PopBlog>
               <PopTitle>{title.slice(0,15)}</PopTitle>
                <PopContent>{content.length > 20 ? shortContent + "..." :
                    content}
                </PopContent>
                </PopBlog>
            </PopularBlogContainer>
                <hr/>
                </Link>
            </>
        )
}
export default PopularBlog;