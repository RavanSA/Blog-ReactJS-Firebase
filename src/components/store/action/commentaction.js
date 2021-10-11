const commentaction = (comment) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profData = getState().firebaseReducer.profile;
        const UID = getState().firebaseReducer.auth.uid;
        const id = window.location.pathname.split("blog/");
        const idx = id[1];
        // if(window.location.pathname.substring("blog/").length !== 2 ){
        //     window.location.reload();
        // }
        console.log("ACTIONIDD",window.location.pathname.substring("blog/").length)
        firestore.collection("blogs").doc(idx).collection("comments").add({
            content: comment.content,
            authorFirstname: profData.firstName,
            authorLastname: profData.lastName,
            commentAuthorImage: profData.profImageUrl,
            authorID: UID,
            date: new Date(),
        }).then( () => {
                dispatch({type: 'ADD_COMMENT_BLOG', comment})
            }
        ).catch( (err) => {
            dispatch({type: 'ADD_COMMENT_BLOG_ERROR', err})
        })
    }
}

export default commentaction;