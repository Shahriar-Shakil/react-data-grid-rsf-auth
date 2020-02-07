import firebase from "firebase";
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSK9R0NSAS3nkqox5qGVC-0_kCg4ZI784",
  authDomain: "reactjs-app-236323.firebaseapp.com",
  databaseURL: "https://reactjs-app-236323.firebaseio.com",
  projectId: "reactjs-app-236323",
  storageBucket: "reactjs-app-236323.appspot.com",
  messagingSenderId: "328634759110",
  appId: "1:328634759110:web:fedd73023bdebc6b3224c7",
  measurementId: "G-E81F4LLTS0"
});

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
