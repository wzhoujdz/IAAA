let loginButtonId = document.getElementById("loginButtonId");
let createAccountButtonId = document.getElementById("createAccountButtonId");
let forgetPasswordButtonId = document.getElementById("forgetPasswordButtonId");

//when clicked that login button, the code will be executed
loginButtonId.addEventListener("click", function(){
    var userName=document.getElementById('userName').value;
    var password=document.getElementById('password').value;
        var data = {
            userName: userName,
            password: password,
        }
        fetch('/loginIn', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data), 
          })
          .then(response => response.json())
          .then(data => {
            if(data.result=='log in successfully'){
                alert('log in successfully');
                 window.location.href="/dashboard.html";
            }else{
                alert('account does not exist');
            }
            //if user information is correct, switch window and output success
            //else ouput failure
          })
});

createAccountButtonId.addEventListener("click", function(){
    window.location.href="/accountCreating.html"; 
});

forgetPasswordButtonId.addEventListener("click", function(){
    window.location.href="/forgetPassword.html"; 
});