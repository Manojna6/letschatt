function addUser(){
    chat_username = document.getElementById("username").value;
    localStorage.setItem("Username", chat_username);
    window.location = "chat_room.html";
}