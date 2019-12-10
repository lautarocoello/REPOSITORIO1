  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBH2bK609WMfIvKF3rerheWZdG0snK7jIo",
    authDomain: "prueba-919c4.firebaseapp.com",
    databaseURL: "https://prueba-919c4.firebaseio.com",
    projectId: "prueba-919c4",
    storageBucket: "gs://prueba-919c4.appspot.com",
    messagingSenderId: "296497779785",
    appId: "1:296497779785:web:1133fbd3e9b5108a041b98",
    measurementId: "G-XE9BD7HF0C",
      
    //database
    // apiKey: "AIzaSyApLWQkOS8z4RlpNVcBUPVzShN6gIKdz7c",
    // authDomain: "app-gestion-58baf.firebaseapp.com",
    // databaseURL: "https://app-gestion-58baf.firebaseio.com",
    // projectId: "app-gestion-58baf",
    // storageBucket: "app-gestion-58baf.appspot.com",
    // messagingSenderId: "892243443996",
    // appId: "1:892243443996:web:928d1fc2fbe5e26c783ad9",
    // measurementId: "G-21QFPGX5XK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  

  var db = firebase.firestore();

