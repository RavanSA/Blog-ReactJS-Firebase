import authreducer from "../reducers/authreducer";
import blogreducer from "../reducers/blogreducer";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import  {firebaseReducer} from "react-redux-firebase";
import commentreducer from "../reducers/commentreducer"

export const rootReducer = combineReducers({
    authReducer: authreducer,
    blogReducer: blogreducer,
    commentReducer: commentreducer,
    firestoreReducer: firestoreReducer,
    firebaseReducer: firebaseReducer
});

