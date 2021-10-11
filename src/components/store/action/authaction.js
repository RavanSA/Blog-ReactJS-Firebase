export const signinaction = (credentials) => {
    return(dispatch, getState, {getFirebase})  => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
        credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: "SIGN_IN",credentials})
            }
        ).catch((err) => {
            dispatch({type: "SIGN_IN_ERROR",err})
        });
    }
}

export const signoutaction = () => {
    return(dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: "SIGN_OUT_SUCCESS"})
        })
    }
}

export const signupaction = (user) => {
    return(dispatch,getState, {getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore =getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            user.email.trim(),
            user.password
        ).then((resp) => {
            return firestore.collection("users").doc(resp.user.uid).set({
                firstName: user.firstName,
                lastName: user.lastName,
                profImageUrl: user.profImageUrl
            })
        }).then(() => {
            dispatch({type: "SIGN_UP_SUCCESS"})
            }
        ).catch((err) => {
            console.log("VVV",err)
            dispatch({type: "SIGN_UP_ERR",err})
        })
    }
    }
