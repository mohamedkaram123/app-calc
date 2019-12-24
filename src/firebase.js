import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAjGc3NAFqlD5dIERA8fD5Y_WREonL0f_8",
    authDomain: "wanssa-app.firebaseapp.com",
    databaseURL: "https://wanssa-app.firebaseio.com",
    projectId: "wanssa-app",
    storageBucket: "wanssa-app.appspot.com",
    messagingSenderId: "116675635059",
    appId: "1:116675635059:web:0a9de13f2a6f2d2d03c706",
    measurementId: "G-DYEJJKE6NM"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;