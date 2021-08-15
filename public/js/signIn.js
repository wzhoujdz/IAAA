$(document).ready(function(){
    let loginButtonId = document.getElementById("loginButtonId");
    let createAccountButtonId = document.getElementById("createAccountButtonId");
    let forgetPasswordButtonId = document.getElementById("forgetPasswordButtonId");
    //set ID for the login, create account and forget password button
    
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
                switch(data.result) {
                    case 'log in successfully':
                        alert('log in successfully');
                        window.location.href="/dashboard.html";
                        break;
                    default:
                        alert('account does not exist/ your password is wrong');
               } 
              })
    });
    
    createAccountButtonId.addEventListener("click", function(){
        window.location.href="/accountCreating.html"; 
    });
    
    forgetPasswordButtonId.addEventListener("click", function(){
        window.location.href="/forgetPassword.html"; 
    });
    
    
});