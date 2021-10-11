    import {
    Card, CardContainer, BlogImage, BlogText,
    BlogCard,
    BlogH1,CountView,
    BlogP, ProfImage,BlogAuthorInfo,AuthorName
    } from "./CardDesign";
    import moment from "moment";
    import React from "react";


const Blog = ({blog}) => {
    const shortTitle =  blog.title.slice(0,20) ;
    const shortContent =  blog.content.slice(0,60) ;
    return(
        <>
            <CardContainer>
                {/*<Card >*/}
                    <BlogCard key={blog.id}>
                    <BlogImage src={blog.imageUrl} alt="Blog Image"/>
                        <BlogH1>
                            <h2>
                            {blog.title.length > 20 ? shortTitle :
                            blog.title}
                            </h2>
                        <BlogP>
                            <h4>
                    {blog.content.length > 60 ?  shortContent+"......." :
                        blog.content}</h4>

                    </BlogP>
                            <BlogAuthorInfo>
                                <p>
                                    <ProfImage src={blog.authorProfImage} alt="Author Profile Picture"/>
                                    <AuthorName>{blog.authorFirstname + "  " + blog.authorLastname}</AuthorName></p>
                                <CountView>· {blog.viewCount > 0 ? Math.round(blog.viewCount/2) : 0}  Views </CountView>
                            </BlogAuthorInfo>

                    </BlogH1>

                    </BlogCard>

                {/*</Card>*/}
            </CardContainer>
        </>
    );
}

export default Blog;