import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCmAadOjz1vrwtWLN92oQcHChbfIzevFXc",
    authDomain: "linkedin-clone-f2c79.firebaseapp.com",
    projectId: "linkedin-clone-f2c79",
    storageBucket: "linkedin-clone-f2c79.appspot.com",
    messagingSenderId: "850274230",
    appId: "1:850274230:web:543e589f9137f22cd14317"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db=firebase.firestore()
const auth = firebase.auth()


export {db, auth}
