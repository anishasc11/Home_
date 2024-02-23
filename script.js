const firebaseConfig = {
    apiKey: "AIzaSyCRDQvMDqoJlOjjZaEpXkyB2fhg1EY0xJw",
    authDomain: "home-automation-b2260.firebaseapp.com",
    databaseURL: "https://home-automation-b2260-default-rtdb.firebaseio.com",
    projectId: "home-automation-b2260",
    storageBucket: "home-automation-b2260.appspot.com",
    messagingSenderId: "396135703956",
    appId: "1:396135703956:web:623efc307a774ebc17db81",
    measurementId: "G-H2D0Q3T0CM"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});
