// register


submitForm = () => { 
  let regEmail = document.querySelector('#rEmail').value;
  let regPassword = document.querySelector('#rPassword').value;
  let regPasswordAgain = document.querySelector('#rPasswordAgain').value;
  let registeredUsers = [];

  clearForm = () => {
    regEmail.value = "";
    regPassword.value = "";
    regPasswordAgain.value = "";
    document.querySelector('#id02').style.display='none';
  }
  /*
  if(regEmail.includes('@')) {
    
    if(regPassword === regPasswordAgain) {
      console.log(`${regPassword} ${regEmail} ${regPasswordAgain}`);
      clearForm();
    } else {
      alert('passwords do not match');
      return false;
    }

  } else {
    alert('valid email is required');
    return false;
  }
  */
}

let regPassword = document.querySelector('#rPassword').value;
let regEmail = document.querySelector('#rEmail').value;
let regPasswordAgain = document.querySelector('#rPasswordAgain').value;

function validateEmail(regEmail) {
 if(! regEmail.includes('@')) {
  //alert('valid email is required');
  document.querySelector("#msgEmail").innerHTML = "valid email is required";
  document.querySelector("#msgEmail").style.color = "red";
  document.querySelector("#submit").disabled = false;  
  return false;
 } else {
  document.querySelector("#msgEmail").innerHTML = "";
 }
 
}

function getPasswordValue(pass) {
  regPassword = pass;
  return regPassword;
}

function comparePassword(regPasswordAgain) {
  if(regPassword != regPasswordAgain) {
    // alert('password dont mactch');
    document.querySelector("#msgRepPass").innerHTML = "password dont mactch";
    document.querySelector("#msgRepPass").style.color = "red";
    document.querySelector("#submit").disabled = false;
    return false;
  } else {
    document.querySelector("#msgRepPass").innerHTML = "";
  }
  console.log(email, password, tpasswordAgain);
  
 }

 function passwordLength(regPasswordAgain) {
  if (regPasswordAgain.length <= 8) {
    // alert('password need to be 8 charaters or more');
    document.querySelector("#msgPasslgth").innerHTML = "Password must be at least 8 characters long";
    document.querySelector("#msgPasslgth").style.color = "red";
    document.querySelector("#submit").disabled = false;
    return false;
  } else {
    document.querySelector("#msgPasslgth").innerHTML = "";
  }
  
 }



function validatePassword(password) {
                
  // Do not show anything when the length of password is zero.
  if (password.length === 0) {
      document.querySelector("#msgPassStr").innerHTML = "";
      return;
  }
  // Create an array and push all possible values that you want in password
  var matchedCase = new Array();
  matchedCase.push("[$@$!%*#?&]"); // Special Charector
  matchedCase.push("[A-Z]");      // Uppercase Alpabates
  matchedCase.push("[0-9]");      // Numbers
  matchedCase.push("[a-z]");     // Lowercase Alphabates

  // Check the conditions
  var ctr = 0;
  for (var i = 0; i < matchedCase.length; i++) {
      if (new RegExp(matchedCase[i]).test(password)) {
          ctr++;
      }
  }
  // Display it
  var color = "";
  var strength = "";
  switch (ctr) {
      case 0:
      case 1:
      case 2:
          strength = "Very Weak";
          color = "red";
          break;
      case 3:
          strength = "Medium";
          color = "orange";
          break;
      case 4:
          strength = "Strong";
          color = "green";
          break;
  }
  document.querySelector("#msgPassStr").innerHTML = strength;
  document.querySelector("#msgPassStr").style.color = color;
}
