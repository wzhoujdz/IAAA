var checkButtonId = document.getElementById("checkButtonId")
//define this check button
checkButtonId.addEventListener("click", function(){
    var userName=document.getElementById('userName').value;
    var phoneOrEmail=document.getElementById('phoneOrEmail').value;
    var securityAnswer=document.getElementById('securityAnswer').value;
    //these lines are used to get the value of username,phoneOrEmail and securityAnswer in the html
    var data = {
        userName: userName,
        phoneOrEmail:phoneOrEmail,
        securityAnswer:securityAnswer
    }
    //send request to the backend
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
             window.location.href="/reset.html";
         }else{
            alert('Your input is wrong');
        }//if the result sent back from back end is correct, we can go to the reset page,
         //else, inform that the input is wrong
      })
});