const firebaseConfig = {
    apiKey: "AIzaSyC720GQV5QkfFSEe5jPLgU7GN0-NkfSJEk",
    authDomain: "dit-openhouse.firebaseapp.com",
    databaseURL: "https://dit-openhouse.firebaseio.com",
    projectId: "dit-openhouse",
    storageBucket: "dit-openhouse.appspot.com",
    messagingSenderId: "112132781314",
    appId: "1:112132781314:web:f6a00a4fe6f4428651fe1b",
    measurementId: "G-TGTYEJP3QB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();