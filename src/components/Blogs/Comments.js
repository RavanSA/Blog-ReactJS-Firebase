import {BlogStyle} from "./CardDesign";
import Comment from "./Comment";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import React, {Component, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
// if(window.location.pathname.split("blog/").length !== 2 ){
//     window.location.reload();
// }

class Comments extends Component {
    // constructor(props){
    //     super(props)
    //     window.onload = () => {
    //             window.location.reload();
    //     }
    //     // window.onbeforeunload = function(e) {
    //     //     this.setState({currentPath:window.location.pathname.split("blog/")[1]})
    //     // };
    // }

    render() {
        console.log("AAAAAA",window.location.pathname.split("blog/"))

            if(!window.location.hash) {
                window.location = window.location + '#blogs';
                window.location.reload();
            }


        const {comments} = this.props;
        let countComments =0;
        comments  && comments.map((comment) => comment.id !== "null" ? countComments++ : null)
        console.log("COMMENT COUNT",comments )
        return (
            <>
                <h1>{countComments} Comments</h1>
                <Comment comments={comments}/>
                {/*<p>{comments}</p>*/}
                {/*{comments.map(home => <div>{home.content}</div>)}*/}

            </>
        );
    }
}
console.log("ACTIONID",window.location.pathname.split("blog/"))

const mapStateToProps = (state) => {
    // const id = window.location.pathname.split("blog/");
    // const blogs = state.firestoreReducer.data.blogs;
    // const blog = blogs ? blogs[id[1]] : null;

    console.log("STATE",state)
    return {
        comments: state.firestoreReducer.ordered.comments,
    }
}

// console.log("state",this.state.currentPath)
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "blogs",
            doc: window.location.pathname.split("blog/")[1],
            subcollections: [{ collection: "comments" , orderBy: ["date","desc"] }],
            storeAs: 'comments'}
    ])
)(Comments);
