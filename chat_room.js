

  user_name = localStorage.getItem("Username");
  console.log(user_name);
  console.log(document.getElementById("username"))
  document.getElementById("username").innerHTML = "Welcome, " + user_name;
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCUbLdpXFKQif6QAVGvk5gabFiUWwcswn8",
    authDomain: "lets-chat-9bc9d.firebaseapp.com",
    databaseURL: "https://lets-chat-9bc9d-default-rtdb.firebaseio.com",
    projectId: "lets-chat-9bc9d",
    storageBucket: "lets-chat-9bc9d.appspot.com",
    messagingSenderId: "481710097890",
    appId: "1:481710097890:web:e39246120097f60c3ea5bb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addRoom() {
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
      purpose : "adding room name"
});
    localStorage.setItem("roomname", roomname);
    console.log(roomname);
    window.location = "chat_page.html";
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
 //End code
 });});}
getData();

function redirectToRoomName(roomname){
  console.log(roomname);
  window.location = "chat_page.html";
  localStorage.setItem("roomname", roomname)
}

function logout(){
  window.location = "index.html";
  localStorage.removeItem("Username");
  localStorage.removeItem("roomname");
}