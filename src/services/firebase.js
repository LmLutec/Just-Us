import firebase from 'firebase';


// const config = {
//     apiKey: "ADD-YOUR-DETAILS-HERE",
//     authDomain: "ADD-YOUR-DETAILS-HERE",
//     databaseURL: "ADD-YOUR-DETAILS-HERE"
//   };
//   firebase.initializeApp(config);

  var firebaseConfig = {
    apiKey: "AIzaSyAjeb8chg7Xei66SC98D3P17WnDtgOO03g",
    authDomain: "chats-only.firebaseapp.com",
    projectId: "chats-only",
    storageBucket: "chats-only.appspot.com",
    messagingSenderId: "969212028440",
    appId: "1:969212028440:web:c6d4d24b198753ca68456d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth;
  export const db = firebase.database();
