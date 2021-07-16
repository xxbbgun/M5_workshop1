function formValid() {
  var firstname = document.getElementsByName("firstname")[0].value;
  var lastname = document.getElementsByName("lastname")[0].value;
  var username = document.getElementsByName("username")[0].value;
  var password = document.getElementsByName("password")[0].value;
  var email = document.getElementsByName("email")[0].value;

  if ((firstname == null || firstname == "") && (lastname == null || lastname == "")) {
    alert("Enter Your name ");
    return false;
  }

  if (username == null || username == "") {
    alert("Enter your username");
    return false;
  }
  if (password == null || password == "") {
    alert("Enter password");
    return false;
  }
  // if (password != cpass) {
  //   alert("Password doesnt match");
  //   return false;
  // }
  if (email == null || email == "") {
    alert("Enter your email number");
    return false;
  }

  alert("Form Validated Successfully! Submitting Details...");
  document.getElementById("fname").innerHTML = "First Name : " + firstname;
  document.getElementById("lname").innerHTML = "Last Name : " + lastname;
  document.getElementById("uid").innerHTML = "Username : " + username;
  document.getElementById("pass").innerHTML = "Password : " + password;
  document.getElementById("email-check").innerHTML = "Email : " + email;
  document.getElementById("btnsubmit").innerHTML = "";

  return false; // Make this return true to submit form

}