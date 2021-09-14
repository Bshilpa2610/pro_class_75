import firebase from 'firebase'
require('@firebase/firestore')


  var firebaseConfig = {
    apiKey: "AIzaSyCJf1QMQdkMBXe1-ntZ6rYxLiE0dgmbSQ4",
    authDomain: "wily-app-6967a.firebaseapp.com",
    projectId: "wily-app-6967a",
    storageBucket: "wily-app-6967a.appspot.com",
    messagingSenderId: "1068060696436",
    appId: "1:1068060696436:web:995ab12e1ad096304f9621"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();