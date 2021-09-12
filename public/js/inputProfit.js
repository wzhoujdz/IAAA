$(document).ready(function(){
    let homeID = document.getElementById("homeID");
      //define buttons for clicking 
    homeID.addEventListener("click", function(){
        window.location.href="../dashboard.html"
    });
    let calculationId = document.getElementById("calculationId");
    //define buttons for clicking 
    calculationId.addEventListener("click", function(){
        window.location.href="../calculation.html"
    });
    let submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function(){
        var date=document.getElementById('date').value;
        var costs=document.getElementById('costs').value;
        var revenue=document.getElementById('revenue').value;
        var data = {
            date: date,
            costs: costs,
            revenue: revenue
        }
        fetch('/inputProfit', {
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
});