$(document).ready(function(){
    let homeID = document.getElementById("homeID");
    homeID.addEventListener("click", function(){
        window.location.href="../dashboard.html"
    });
    let calculationId = document.getElementById("calculationId");
    calculationId.addEventListener("click", function(){
        window.location.href="../calculation.html"
    });

    let searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function(){
        var startTime=document.getElementById('startTime').value;
        var endTime=document.getElementById('endTime').value;
        var data= {
            startTime:startTime,
            endTime:endTime
        }
        fetch('/showProfit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data), 
        })
        .then(response => response.json())
        .then(data => {
            switch(data.result) {
                case 'successfully':
                    alert('INPUT successfully');
                    break;
                default:
                    alert('Your INPUT is wrong');
            } 
        })
    });
    
});