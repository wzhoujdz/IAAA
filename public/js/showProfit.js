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
                    console.log('data.result111111111111111');
                    console.log(data.data);
                    for(var i=0;i<data.data.length;i++){
                        var thisValue=data.data[i].date;
                        var thisDataArray=  thisValue.split('-');
                        var thisData=thisDataArray[2];
 
                        var realId=parseInt(thisData);
                        console.log('thisData111111');
                        console.log(realId);
                        $("#costOfDate"+realId).html("$"+data.data[i].costs);
                        $("#revenueOfDate"+realId).html("$"+data.data[i].revenue);
                        $("#profitOfDate"+realId).html("$"+data.data[i].profit);

                    }
                    break;
                default:
                    alert('Something is wrong');
            } 
        })
    });
    
});