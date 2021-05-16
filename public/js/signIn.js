let loginButton = document.getElementById("loginButton")
//define this login button
loginButton.addEventListener("click", function(){
    var userName=document.getElementById('userName').value;
    var password=document.getElementById('password').value;
    //It is used to get the data at this time of username and password
        var data = {
            userName: userName,
            password: password,
        }
        //define data now, can be connected to the database(show later)
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            //js formate
            body: JSON.stringify(data), // post body
          })
          .then(response => response.json())
          .then(data => {
            if(data.result=='The data is correct'){
                alert('Create successfully');
                //the condition for the login system to be used successfully
            }else{
                alert('Mistakes occur');
            }
            //the condition for the login system fail
            console.log('Past Activity Success:', data);
          })//show in the console back end   
});
