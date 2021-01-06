import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyCqxo2yEw9H1kEfihzJlVdLX708JgtfDCw",
  authDomain: "myplan-project.firebaseapp.com",
  databaseURL: "https://myplan-project.firebaseio.com",
  projectId: "myplan-project",
  storageBucket: "myplan-project.appspot.com",
  messagingSenderId: "620747216681",
  appId: "1:620747216681:web:02ec8a94df4b632affc938",
  measurementId: "G-83S6YQBJ4C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase;

