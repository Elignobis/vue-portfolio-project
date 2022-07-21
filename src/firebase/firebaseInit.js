import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzFaROcbqv0CsMW9JAOmYSYp60lvJjwpg",
    authDomain: "sibongile-vue-port-pro.firebaseapp.com",
    projectId: "sibongile-vue-port-pro",
    storageBucket: "sibongile-vue-port-pro.appspot.com",
    messagingSenderId: "167353284648",
    appId: "1:167353284648:web:678662619210655b4a1d1d",
    measurementId: "G-69EPNJ7KB7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();
  