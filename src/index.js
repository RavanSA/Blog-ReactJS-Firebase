import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from "./components/store/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createFirestoreInstance,reduxFirestore, getFirestore} from "redux-firestore";
import { getFirebase} from "react-redux-firebase";
import firebaseconfig from "./components/config/firebaseconfig";
import firebase from "firebase/app";
import {ReactReduxFirebaseProvider} from "react-redux-firebase"

const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase, firebaseconfig)))



const profileSpecificProps = {
    userProfile: "users",
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
    resetBeforeLogin: false,
};

const rrfProps = {
    firebase,
    config: profileSpecificProps,
    dispatch: store.dispatch,
    createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);