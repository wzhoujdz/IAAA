$(document).ready(function(){
    let search=location.search.split('?')[1];
    let searchArray=search.split('&');
    let searchObject={};
    for(let i=0;i<searchArray.length;i++){
        let  key=searchArray[i].split('=')[0];
        let  value=searchArray[i].split('=')[1];
        searchObject[key]=value;
    }

    $("#date").val(searchObject.date);
    $("#revenue").val(searchObject.revenue);
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
                case 'successfully':
                    alert('INPUT successfully');
                    break;
                default:
                    alert('Your INPUT is wrong');
            } 
        })
    });
});