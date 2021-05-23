let loginButtonId = document.getElementById("loginButtonId");
let createAccountButtonId = document.getElementById("createAccountButtonId");
let forgetPasswordButtonId = document.getElementById("forgetPasswordButtonId");


//define this login button
loginButtonId.addEventListener("click", function(){
    var userName=document.getElementById('userName').value;
    var password=document.getElementById('password').value;
    //It is used to get the data at this time of username and password
        var data = {
            userName: userName,
            password: password,
        }
        //define data now, can be connected to the database(show later)
        fetch('/loginIn', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            //js formate
            body: JSON.stringify(data), // post body
          })
          .then(response => response.json())
          .then(data => {
            if(data.result=='log in successfully'){
                alert('log in successfully');
                 window.location.href="/dashboard.html";
            }else{
                alert('account does not exist');
            }
          })//show in the console back end   
});

createAccountButtonId.addEventListener("click", function(){
    window.location.href="/accountCreating.html"; 
});

forgetPasswordButtonId.addEventListener("click", function(){
    window.location.href="/forgetPassword.html"; 
});