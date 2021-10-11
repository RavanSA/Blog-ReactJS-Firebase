
const initState = {
    authError: null
};



const authreducer = (state = initState, action) => {
    switch (action.type){
        case "SIGN_IN":
            console.log("SUCCESSFULL SIGN IN ")
            window.location.href = '/'
            return {
                ...state,
                authError: null
            }
        case "SIGN_IN_ERROR":
            console.log("FAIL")
            return{
                ...state,
                authError: "sign in err"
            }
        case "SIGN_OUT_SUCCESS":
            console.log("SIGN OUT");
            return state;
        case "SIGN_UP_SUCCESS":
            console.log("SIGN UP SUCCESS")
            window.location.href = '/'
            return {
                ...state,
                authError: null
            }
        case "SIGN_UP_ERR":
            console.log("SIGN UP ERR")
            console.log("ACTION",state)
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authreducer;