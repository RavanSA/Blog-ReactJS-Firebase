const initState = {
    blogs: []
};

console.log("BLOG",initState)

const blogreducer = (state = initState, action) => {
    switch (action.type){
        case "ADD_BLOG":
            console.log('new blog added', state)
            return state;
        case "ADD_BLOG_ERROR":
            console.log("error occured while adding blog",action.err)
            return state;
        default:
            return state;
    }
}

export default blogreducer;