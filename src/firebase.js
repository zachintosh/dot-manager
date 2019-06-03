import 'firebase/firestore';
// import * as firebaseui from 'firebaseui'
var firebase = require('firebase')

var app = firebase.initializeApp({
  apiKey: "AIzaSyAAWtgpz5ykto2vjiNc47bpjggTQnb-9aU",
  authDomain: "dot-manager-a9d4d.firebaseapp.com",
  databaseURL: "https://dot-manager-a9d4d.firebaseio.com",
  projectId: "dot-manager-a9d4d",
  storageBucket: "dot-manager-a9d4d.appspot.com",
  messagingSenderId: "403002188493",
  appId: "1:403002188493:web:2f51dd143cf2b03d"
})

// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//   signInSuccessUrl: '/',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
// });

const firestore = firebase.firestore()

// add new doc

firestore.collection('zach')




// update doc



// remove doc