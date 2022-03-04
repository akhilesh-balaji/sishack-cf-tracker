// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAIIdB5-KL3zrLJF6CvtobOngzZ9Qt7P9Y",
    authDomain: "cftracker-nextgen.firebaseapp.com",
    databaseURL: "https://cftracker-nextgen-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "cftracker-nextgen",
    storageBucket: "cftracker-nextgen.appspot.com",
    messagingSenderId: "196835176227",
    appId: "1:196835176227:web:d973c7f8c569f5b790e696"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  database_ref.child('score/' + user.uid).update(totalcf);