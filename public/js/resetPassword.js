$(document).ready(function(){
  var loginButtonId = document.getElementById("loginButtonId")
  //define this check button
  checkButtonId.addEventListener("click", function(){
      var newPassword=document.getElementById('newPassword').value;
      var confirmNewPassword=document.getElementById('confirmNewPassword').value;
      var data = {
          newPassword: newPassword,
          confirmNewPassword:confirmNewPassword
      } //send request to the backend
      fetch('/reset', {
          method: 'POST',
          headers: {
        'Content-Type': 'application/json'
         },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          if(data.result=='The Indentification is ended'){
               alert('Correctly');
               window.location.href="/dashboard.html";
           }else{
              alert('Your input is wrong');
          }
        })
  });
  
});