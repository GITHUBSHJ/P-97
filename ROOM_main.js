//ADD YOUR FIREBASE LINKS HERE
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME " + user_name+"!";

/////function OF Adding ROOM..////
function addRoom() {
	room_name = document.getElementById("room_name").value;

   localStorage.setItem("room_name", room_name);

   window.location = "chat_room_index.html";

   firebase.database().ref("/").child(room_name).update({
		 purpose: "Adding Room Name"
   });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
	Room_names = childKey;
   //Start code
	 Room_names = childKey;
	 console.log("room_name - " + Room_names);
	 row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
	 document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();


//function of REDIRECTTOROOMNAME...//
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_room_index.html";
}

//function for logout...//
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

        window.location = "chat_room_index.html";
}