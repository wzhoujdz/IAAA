let homeID = document.getElementById("homeID");
let chartContainerID = document.getElementById("chartContainerID")
let checkButtonId = document.getElementById("checkButtonId")



homeID.addEventListener("click", function(){
  window.location.href="../dashboard.html"
});

checkButtonId.addEventListener("click", function(){
  var startTime = document.getElementById("startTime").value;
  var endTime = document.getElementById("endTime").value;
  var data = {
      startTime: startTime,
      endTime: endTime,
  }
  fetch('/searchCharts', {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json'
      },//as it will switch to reset, so it will be in this.but I haven't set reset it, so it's not useful now
      body: JSON.stringify(data), // post body
    })
    .then(response => response.json())
    .then(data => {
      if(data.result=='searchCharts successfully'){
        console.log(data);

        var myChart = echarts.init(chartContainerID);
        var xAxisData=[];
        var seriesData=[];
        for(var i=0;i<data.data.length;i++){
          xAxisData.push(data.data[i].month)
          seriesData.push(data.data[i].profit)
        }

        // 指定图表的配置项和数据
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

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);




      }else{
          alert('wrong');
      }//when input is wrong
    })
});



