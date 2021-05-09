let submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", function(){
    var userName=document.getElementById('userName').value;
    var phoneOrEmail=document.getElementById('phoneOrEmail').value;
    var password=document.getElementById('password').value;
    //获取这个id的所在的节点
    var confirmPassword=document.getElementById('confirmPassword').value;
    var securityAnswer=document.getElementById('securityAnswer').value;
    if(password==confirmPassword){
        var data = {
            userName: userName,
            phoneOrEmail:phoneOrEmail,
            password: password,
            securityAnswer:securityAnswer
        }
        fetch('/signIn', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data), // post body
          })
          .then(response => response.json())
          .then(data => {
            if(data.result=='The userName exists'){
                alert('The userName exists');
            }
            console.log('Past Activity Success:', data);
          })
    }else{
        alert('password is not the same as confirm password');
    }

});