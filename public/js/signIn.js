$(document).ready(function(){
    let isSuccessful=false;
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
                        $('#dialogId').show();
                        $('#dialogContentId').html('log in successfully');
                        isSuccessful=true;
                        break;
                    default:
                        $('#dialogId').show();
                        $('#dialogContentId').html('account does not exist/ your password is wrong');
                        isSuccessful=false;
               } 
               console.log('Past Activity Success:', data);
              })
           
    });
    
    createAccountButtonId.addEventListener("click", function(){
        window.location.href="/accountCreating.html"; 
    });
    
    forgetPasswordButtonId.addEventListener("click", function(){
        window.location.href="/forgetPassword.html"; 
    });
    $("#dialogButtonId").click(function(){
        if(isSuccessful==true){
            $('#dialogId').hide();
            window.location.href="/dashboard.html";
        }else{
            $('#dialogId').hide();
        }
    });
    
    
});