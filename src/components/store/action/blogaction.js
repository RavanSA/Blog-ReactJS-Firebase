const createblogaction = (blog) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profData = getState().firebaseReducer.profile;
        const UID = getState().firebaseReducer.auth.uid;
        console.log("PROFDATA",profData)
        console.log(firestore)
        firestore.collection("blogs").add({
            title: blog.title,
            content: blog.content,
            imageUrl: blog.imageUrl,
            authorFirstname: profData.firstName,
            authorLastname: profData.lastName,
            authorProfImage: profData.profImageUrl,
            authorID: UID,
            viewCount:0,
            date: new Date(),
        }).then( () => {
            dispatch({type: 'ADD_BLOG', blog})
        }
    ).catch( (err) => {
            dispatch({type: 'ADD_BLOG_ERROR', err})
        })
    }
}

export default createblogaction;