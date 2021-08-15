$(document).ready(function(){
  var loginButtonId = document.getElementById("loginButtonId")
  //define this check button
  loginButtonId.addEventListener("click", function(){
      var newPassword=document.getElementById('newPassword').value;
      var confirmNewPassword=document.getElementById('confirmNewPassword').value;
      var userName   =window.location.search.toString().split('=')[1];
      
      var data = {
          newPassword: newPassword,
          confirmNewPassword:confirmNewPassword,
          userName:userName,
      } //send request to the backend
      fetch('/setNewPassword', {
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
               window.location.href="/signIn.html";
           }else{
              alert('Your input is wrong');
          }
        })
  });
  
});