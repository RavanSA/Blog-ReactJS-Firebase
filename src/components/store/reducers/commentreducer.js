const initState = {
    comments: []
};

console.log("DCOMMENT",initState)


const commentreducer = (state = initState, action) => {
    switch (action.type){
        case "ADD_COMMENT_BLOG":
            console.log('new blog added', state)
            return state;
        case "ADD_COMMENT_BLOG_ERROR":
            console.log("error occured while adding blog",action.err)
            return state;
        default:
            return state;
    }
}

export default commentreducer;