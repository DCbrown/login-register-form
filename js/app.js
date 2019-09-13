// register

clearForm = () => {
  console.log('hi');
  console.log(registeredUsers);
  regEmail.value = "";
  regPassword.value = "";
  regPasswordAgain.value = "";
  document.querySelector('#id02').style.display="none";
  document.querySelector("#msgEmail").innerHTML = "";

}

function submitForm() { 
  
  let regEmail = document.querySelector('#rEmail').value;
  let regPassword = document.querySelector('#rPassword').value;
  let regPasswordAgain = document.querySelector('#rPasswordAgain').value;
  let registeredUsers = [];

  
  if (! regEmail.includes('@')) {
    document.querySelector("#msgEmail").innerHTML = "valid email is required";
    document.querySelector("#msgEmail").style.color = "red";
    document.querySelector('#msgEmail').style.display = "block";
    // window.alert("Please enter your email."); 
    return false; 
  } else {
    document.querySelector("#msgEmail").innerHTML = "";
    document.querySelector('#msgEmail').style.display = "none";
  }

  if(regPassword.length <= 7) {
    document.querySelector("#msgPass").innerHTML = "Password needs to be 8 characters or more";
    document.querySelector("#msgPass").style.color = "red";
    document.querySelector('#msgPass').style.display = "block";
    return false; 
  } else {
    document.querySelector("#msgPass").innerHTML = "";
    document.querySelector('#msgPass').style.display = "none";
  }

  if(regPassword != regPasswordAgain) {
    document.querySelector("#msgPass").innerHTML = "password do not match";
    document.querySelector("#msgPass").style.color = "red";
    document.querySelector('#msgPass').style.display = "block";
    return false; 
  } else {
    document.querySelector("#msgPass").innerHTML = "";
    document.querySelector('#msgPass').style.display = "none";
  }

  let SignUp = {
    email: regEmail,
    password: regPassword
  }

  registeredUsers.push(SignUp);
  localStorage.setItem('RegUser', JSON.stringify(registeredUsers));
  console.log(registeredUsers);

  clearForm();
  return true; 
}

// validate password str

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

