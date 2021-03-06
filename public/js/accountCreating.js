$(document).ready(function(){
    let isSuccessful=false;
    let submitButton = document.getElementById("submitButton");
    let isMobile= function (value) {
        var validateReg = /^((\+?86)|(\(\+86\)))?1\d{10}$/;
        return validateReg.test(value);
    };
    let isString= function (value) {
        var validate = /^[a-zA-Z]{0,}$/;
        return validate.test(value);
    };
    //https://www.jb51.net/article/46095.htm
    //define this submit button for clicking and changing interfere
    submitButton.addEventListener("click", function(){
        var userName=document.getElementById('userName').value;
        var phoneOrEmail=document.getElementById('phoneOrEmail').value;
        if(isMobile(phoneOrEmail)===false){
            $('#dialogId').show();
            $('#dialogContentId').html('The format of your phone number is wrong');
            isSuccessful=false;
            return;
        }
        var password=document.getElementById('password').value;
        var confirmPassword=document.getElementById('confirmPassword').value;
        var securityAnswer=document.getElementById('securityAnswer').value;
        if(isString(securityAnswer)===false){
            $('#dialogId').show();
            $('#dialogContentId').html('The answer to Security Question should be string');
            isSuccessful=false;
            return;
        }
        //get the value when id is here 
        if(password==confirmPassword){
            var data = {
                userName: userName,
                phoneOrEmail:phoneOrEmail,
                password: password,
                securityAnswer:securityAnswer
            }
            //create condition when the password is the same as confirm password, which means there's nothing wrong
            //then, set the data value of the variables.
            fetch('/signIn', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data), 
              })
              //as it will be switched to sign in, use these codes to set the condition
              .then(response => response.json())
              .then(data => {
                if(data.result=='The userName exists'){
                    $('#dialogId').show();
                    $('#dialogContentId').html('The user name exists/ Your input is not available');
                    isSuccessful=false;
                    //when the username is existing, it will not continue, and alarm the users to change username
                }else{
                    $('#dialogId').show();
                    $('#dialogContentId').html('Create Successfully');
                    isSuccessful=true;
                    
                }
                //if these username is not used, they can create successfully, and then switch to login in
                console.log('Past Activity Success:', data);
              })
        }else{
            alert('password is not the same as confirm password');
        }//if the passwords are not correct, the codes will stop here with the alarm
    });
    $("#dialogButtonId").click(function(){
        if(isSuccessful==true){
            $('#dialogId').hide();
            window.location.href="/signIn.html";
        }else{
            $('#dialogId').hide();
        }
    });
    
    
});