let checkButton = document.getElementById("checkButton")
//define this check button
checkButton.addEventListener("click", function(){
    var userName=document.getElementById('userName').value;
    var phoneOrEmail=document.getElementById('phoneOrEmail').value;
    var password=document.getElementById('password').value;
    //get the value when id is here 
    var confirmPassword=document.getElementById('confirmPassword').value;
    var securityAnswer=document.getElementById('securityAnswer').value;
    var data = {
        userName: userName,
        phoneOrEmail:phoneOrEmail,
        password: password,
        securityAnswer:securityAnswer
    }
    fetch('/reset', {
        method: 'POST',
        headers: {
      'Content-Type': 'application/json'
       },//as it will switch to reset, so it will be in this.but I haven't set reset it, so it's not useful now
        body: JSON.stringify(data), // post body
      })
      .then(response => response.json())
      .then(data => {
        if(data.result=='The Indentification is ended'){
             alert('Correctly');
             //to try whether they are correct or not
         }else{
            alert('Your input is wrong');
        }//when input is wrong
        console.log('Past Activity Success:', data);
      })
});