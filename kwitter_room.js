
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA18L-5Opj81tW5m7tMVDyRdyKAKy3qA48",
  authDomain: "lets-chat-app-1f00c.firebaseapp.com",
  databaseURL: "https://lets-chat-app-1f00c-default-rtdb.firebaseio.com",
  projectId: "lets-chat-app-1f00c",
  storageBucket: "lets-chat-app-1f00c.appspot.com",
  messagingSenderId: "593662457296",
  appId: "1:593662457296:web:96dacb156bf7334e91b5d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      }); 
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log("room name- "+Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
