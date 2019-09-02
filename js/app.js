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
    document.getElementById('id02').style.display='none';
  }
  
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
}

