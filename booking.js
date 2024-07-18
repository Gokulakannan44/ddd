const firebaseConfig = {
    apiKey: "AIzaSyABHiWM5lNaMJf8RH04kNPEARxekpR7IUA",
    authDomain: "booking-form-1fcfa.firebaseapp.com",
    databaseURL: "https://booking-form-1fcfa-default-rtdb.firebaseio.com",
    projectId: "booking-form-1fcfa",
    storageBucket: "booking-form-1fcfa.appspot.com",
    messagingSenderId: "1042887236688",
    appId: "1:1042887236688:web:9078339a396f2068094555"
  }; 

  firebase.initializeApp(firebaseConfig);

  //reference
  var bookingformDB = firebase.database().ref("bookingform");

  document.getElementById('bookingform').addEventListener('submit', submitform);

  function submitform(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('email');
    var phonenumber = getElementVal('phone');
    var dateofbirth = getElementVal('dob');

    console.log(name, email, phone, dob)
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };