let checkButtonId = document.getElementById("checkButtonId")
//define this check button
checkButtonId.addEventListener("click", function(){
    var userName=document.getElementById('userName').value;
    var phoneOrEmail=document.getElementById('phoneOrEmail').value;
    var securityAnswer=document.getElementById('securityAnswer').value;

    var data = {
        userName: userName,
        phoneOrEmail:phoneOrEmail,
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
             window.location.href="/reset.html";
         }else{
            alert('Your input is wrong');
        }//when input is wrong
      })
});