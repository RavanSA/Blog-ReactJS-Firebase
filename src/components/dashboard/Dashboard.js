import React, {Component}  from "react";
import {DashboardContainer,
        DashboardCol,
        DashboardCol2,
        VerticalLine} from "./DashboardElements";
import BlogList from "../Blogs/BlogList";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {NavBtn, NavBtnLink,NavBtnContainer} from "../layout/NavbarElements";
import Weather from "./Weather";
import PopularPosts from "./PopularPosts";

let limit = 5;
localStorage.setItem('LIMIT', JSON.stringify(
    limit));
class Dashboard extends Component{

    handleLimit = (e) => {
        limit = limit + 5;
        localStorage.setItem('LIMIT', JSON.stringify(
            limit));
        // window.scrollTo({
        //     top: document.documentElement.scrollHeight,
        //     behavior: 'auto'
        // });
        // window.location.reload()
    }

    render() {



        const {blogs} = this.props
        console.log("DASHBOARD",blogs)
        console.log("BLOG LENGTH", JSON.parse(localStorage.getItem('LIMIT')));
        let endBlog = 0;
        let countBlogs =0;
        blogs  && blogs.map((blog) => blog.id !== "null" ? countBlogs++ : endBlog=1)
        return (
            <>
                <DashboardContainer>
                    <DashboardCol>
                        <BlogList blogs={blogs}/>
                    </DashboardCol>
                    <DashboardCol2>
                        <PopularPosts/>
                        <Weather/>
                    </DashboardCol2>
                </DashboardContainer>
                <NavBtnContainer>
                    {countBlogs > 4 || endBlog === 1 ? <NavBtn>
                        <NavBtnLink onClick ={this.handleLimit} > Read More </NavBtnLink>
                    </NavBtn> : null}

                </NavBtnContainer>
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        blogs: state.firestoreReducer.ordered.blogs
    }
}



const sessionLimit = JSON.parse(localStorage.getItem('LIMIT'))
console.log("ESSIONLIMIT",sessionLimit)

export default compose(
    connect(mapStateToProps),
    firestoreConnect(() =>[
        {collection: "blogs", orderBy: ["date","desc"], limit: JSON.parse(localStorage.getItem('LIMIT')) === null ?
            5 : JSON.parse(localStorage.getItem('LIMIT')) }
    ])
)(Dashboard);

