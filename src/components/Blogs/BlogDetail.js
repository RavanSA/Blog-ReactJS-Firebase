import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import { firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Card, CardContainer, Image, H3,H1,
    LoaderContainer,CardCommentH1,NavCommentBtn,ProfImage} from "./CardDesign";
import moment from "moment"
import NewComments from "./NewComments";
import Comments from "./Comments";
import {NavBtn, NavBtnContainer, NavBtnLink} from "../layout/NavbarElements";
import {firestoreReducer} from "redux-firestore";
import firebase from "../config/firebaseconfig";
import Loader from "react-loader-spinner";



const BlogDetail = (props) => {
    console.log("Reducer",firestoreReducer)
    const {blog} = props;
    const authStatus = JSON.parse(localStorage.getItem('LoginStatus'));

    useEffect(()=>{
        const blogPosts = firebase.firestore()
            .collection("blogs")
            .doc(window.location.pathname.split("blog/")[1])
            .update({
                viewCount: firebase.firestore.FieldValue.increment(1)
            });


    }, [])

    if(blog) {

        return(
            <>
            <CardContainer style={{width:"auto"}}>
                 <Card key={blog.id} style={{ margin: "auto"}}>
                     <H1><b><center>{blog.title}</center></b></H1>
                     <Image src={blog.imageUrl} alt="blogimage"/>
                     {console.log(blog.imageUrl)}
                    <H3>{blog.content}</H3>
                     <hr/>
                     <p style={{color:"grey"}}>
                         <ProfImage src={blog.authorProfImage} alt="Author Profile Picture"/>
                         Author: {blog.authorFirstname + "  " + blog.authorLastname}</p>
                     <p style={{color:"grey"}}>Date: {moment(blog.date.toDate()).calendar()} </p>
                 </Card>

                <Comments/>

             </CardContainer>
                {authStatus.uid ? <NewComments/> :
                    <Card>
                       <CardCommentH1>
                           If you want to write comment, please sign up

                        <NavBtnContainer>
                            <NavBtn>
                                <NavCommentBtn>
                                    <NavBtnLink to='/signup' > Sign Up </NavBtnLink>
                                </NavCommentBtn>
                            </NavBtn>
                        </NavBtnContainer>
                    </CardCommentH1>
                    </Card>}

            </>
        );
    } else{
        return (
            <LoaderContainer>
                <Loader
                    type="TailSpin"
                    color="#01bf71"
                    height={100}
                    width={100}
                />
            </LoaderContainer>
                );
           }

}
const mapStateToProps = (state) => {

    const id = window.location.pathname.split("blog/");
    const blogs = state.firestoreReducer.data.blogs;
    const blog = blogs ? blogs[id[1]] : null;
    return{
        blog: blog
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "blogs"}
    ])
    )(BlogDetail)