function addUser()
{
	user_name = document.getElementById("user_name").value;
	localStorage.setItem("user_name", user_name);
	window.location = "ROOM_index.html";

	firebase.database().ref("/").child(user_name).update({
		purpose: "Adding User Name"
  });


}
