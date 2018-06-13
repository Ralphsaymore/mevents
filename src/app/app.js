
(
    function(){
            // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCp4a4h0PhO083RzBwEwGmZP2pNMQ0Qt2w",
    authDomain: "meeventsbackend.firebaseapp.com",
    databaseURL: "https://meeventsbackend.firebaseio.com",
    projectId: "meeventsbackend",
    storageBucket: "meeventsbackend.appspot.com",
    messagingSenderId: "545954320704"
  };
  firebase.initializeApp(config);
  //Get Elements

  preOject = document.getElementById('object');

  //Create database reference

   const dbRef =  firebase.database().ref().child('object');

   //Sync Object Changes

   dbRef.on('value',snap => console.log(snap.val()));

    }
()
);
