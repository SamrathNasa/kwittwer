var firebaseConfig = {
      apiKey: "AIzaSyAP8y8mwW4aD0k5qOY1W8q7bOE3D3K2shc",
      authDomain: "practice-f8901.firebaseapp.com",
      databaseURL: "https://practice-f8901-default-rtdb.firebaseio.com",
      projectId: "practice-f8901",
      storageBucket: "practice-f8901.appspot.com",
      messagingSenderId: "1010451935078",
      appId: "1:1010451935078:web:947d4b753d91c473f022a7"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 var user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

 function addRoom(){
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
            purpose:"adding kwitter room name"
        });
        localStorage.setItem("room_name",room_name);

        window.location="kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) 
 {childKey  = childSnapshot.key;
Room_names = childKey;
      //Start code
console.log("room_names-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id);'> #"+ Room_names +" </div><hr></hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}