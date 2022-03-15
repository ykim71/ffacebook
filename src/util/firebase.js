import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebase_config = {
    apiKey: "AIzaSyAA12hq8oVxxjBzzyIUZ6GpOlNoMNxRNeA",
    authDomain: "incivility-165118.firebaseapp.com",
    databaseURL: "https://incivility-165118-default-rtdb.firebaseio.com",
    projectId: "incivility-165118",
    storageBucket: "incivility-165118.appspot.com",
    messagingSenderId: "459758785409",
    appId: "1:459758785409:web:66fd4a19382ceab5774e80",
    measurementId: "G-4X3KNRSB3P"
  };

const app = firebase.initializeApp(firebase_config);
firebase.analytics();

export default app;