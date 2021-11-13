$(document).ready(function(){
  let homeID = document.getElementById("homeID");
  let chartContainerID = document.getElementById("chartContainerID")
  let checkButtonId = document.getElementById("checkButtonId")
  //define these buttons for clicking and changing interfere
  homeID.addEventListener("click", function(){
    window.location.href="../dashboard.html"
  });
  //set the command for the button to switch window
  checkButtonId.addEventListener("click", function(){
    var startTime = document.getElementById("startTime").value;
    var endTime = document.getElementById("endTime").value;
    var data = {
        startTime: startTime,
        endTime: endTime,
    }
    //set values for thse components 
    fetch('/showProfit', {
        method: 'POST',
        headers: {
      'Content-Type': 'application/json'
        },//as it will switch to reset, so it will be in this.but I haven't set reset it, so it's not useful now
        body: JSON.stringify(data), // post body
      })
      .then(response => response.json())
      .then(data => {
        if(data.result=='successfully'){
          //use if...else loop to check whether the charts are correct or not
          console.log(data);
          var myChart = echarts.init(chartContainerID);
          var xAxisData=[];
          var seriesData=[];
          for(var i=0;i<data.data.length;i++){
            var thisValue=data.data[i].date;
            var thisDataArray=  thisValue.split('-');
            var thisData=thisDataArray[2];

            var realId=parseInt(thisData);
            xAxisData.push(realId)
            seriesData.push(data.data[i].profit)
          }//use for loop to repeat push the data from database into the chart
          //asign the chart with the values 
          var option = {
              title: {
                  text: 'monthly profit'
              },
              tooltip: {},
              legend: {
                  data:['sales']
              },
              xAxis: {
                  data: xAxisData
              },
              yAxis: {},
              series: [{
                  name: 'sales',
                  type: 'bar',
                  data:seriesData
              }]
          };
          myChart.setOption(option);
        }else{
            alert('wrong');
        }//when input is wrong, show this alert
      })
  });
  
  
});