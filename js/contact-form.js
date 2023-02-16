let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};


let popup=document.getElementById("popup");

function openpopup(){
    popup.classList.add("openpopup");
}
function closepopup(){
    popup.classList.remove("openpopup");
}


//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyCkHh5zeDWDoZisGgGM9dR-TJToiZ1vtJI",
    authDomain: "contact-form-5a79c.firebaseapp.com",
    databaseURL: "https://contact-form-5a79c-default-rtdb.firebaseio.com",
    projectId: "contact-form-5a79c",
    storageBucket: "contact-form-5a79c.appspot.com",
    messagingSenderId: "554980182488",
    appId: "1:554980182488:web:fc2604d549bfe117e4caad",
    measurementId: "G-CWJW19CLD7"
  
  };
  
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  //Variable to access database collection
  const db = firestore.collection("fomData");
  
  //Get Submit Form
  let submitButton = document.getElementById("submit");
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();
  
    //Get Form Values
    let firstName = document.getElementById("name").value;
    let contactemail = document.getElementById("email").value;
    let mobileno = document.getElementById("mobile").value;
    let message = document.getElementById("message").value;
  
    firestore
      .collection("fomData")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const fn = doc.data().name;
          if (contactemail === fn) {
            console.log("Already Exists");
          }
  
          // console.log("data", doc.data().name);
        });
      });
    //Save Form Data To Firebase
    db.doc()
      .set({
        name: firstName,
        email: contactemail,
        mobile: mobileno,
        message: message,
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  
    //alert
    //alert("Your Form Has Been Submitted Successfully");
  
    //clear form after submission
    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });
