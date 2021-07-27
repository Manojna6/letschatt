user_name = localStorage.getItem("Username");
room_name = localStorage.getItem("roomname");

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

function logout(){
    window.location = "index.html";
    localStorage.removeItem("Username");
    localStorage.removeItem("room_name");
}

function send(){
    msg= document.getElementById("messageipt").value;
    console.log(room_name);
    console.log(user_name);
    console.log(msg);
    firebase.database().ref("/").child(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}
function getData() {
     firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("chat_container").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
        childData = childSnapshot.val(); 
        if(childKey != "purpose") { firebase_message_id = childKey; 
            message_data = childData;
         //Start code
         console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("chat_container").innerHTML += row;
         //End code 
        } });
         }); } 
         getData();
         
function updateLike(message_id){
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes)+1;
    console.log(update_likes);
      
    firebase.database().ref(room_name).child(message_id).update({
        like : update_likes
    });
      }