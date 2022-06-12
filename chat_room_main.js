// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDLHb4Foy_nB6ALm_snWdwHqWrnUNqqdgE",
	authDomain: "chat-with-world-e7c38.firebaseapp.com",
	databaseURL: "https://chat-with-world-e7c38-default-rtdb.firebaseio.com",
	projectId: "chat-with-world-e7c38",
	storageBucket: "chat-with-world-e7c38.appspot.com",
	messagingSenderId: "435807847229",
	appId: "1:435807847229:web:546aad3f6bde6c2b507b54"
  };
	  
	
	
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);

	  user_name = document.getElementById("user_name").value;
	  room_name = document.getElementById("room_name").value;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
	   firebase_message_id = childKey;
	   message_data = childData;
//Start code

//End code
	} });  }); }
getData();


function logout()
{
	localStorage.removeItem("user_name");
	localStorage.removeItem("room_name");

	  window.location = "SET_MEASSAGE.html";
}



function send()
{
	msg = document.getElementById("msg").value;
	firebase.database().ref(room_name).push({
		  Name:user_name,
		  Message:msg,
		  Like:0,
		  Dislike:0
	});
	document.getElementById("msg").value = "";
}