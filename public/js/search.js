let homeID = document.getElementById("homeID")
let searchButtonId = document.getElementById("searchButtonId");
let tableId = document.getElementById("tableId");

homeID.addEventListener("click", function(){
  window.location.href="../dashboard.html"
});





searchButtonId.addEventListener("click", function(){
  var materialName = document.getElementById("materialName").value;
  var stockTime = document.getElementById("stockTime").value;
  var useTime = document.getElementById("useTime").value;
  var materialNumber = document.getElementById("materialNumber").value;

  var availability
  var obj=document.getElementsByName("availability")
  for (var i=0;i<obj.length;i++){ //遍历Radio
    if(obj[i].checked){
      availability=obj[i].value;
    }
  }
  console.log('1111111111111111111111111111');
  console.log(materialName);
  console.log(stockTime);
  console.log(useTime);
  console.log(availability);
  console.log(materialNumber);
  var data = {
      materialName: materialName,
      stockTime: stockTime,
      useTime: useTime,
      availability: availability,
      materialNumber: materialNumber,
  }
  fetch('/searchTable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      //js formate
      body: JSON.stringify(data), // post body
    })
    .then(response => response.json())
    .then(data => {
      if(data.result=='searchTable successfully'){
          console.log(data);
          for(var i=0;i<data.data.length;i++){
            var row = document.createElement('div');
            row.classList.add("row");
            var col1 = document.createElement('div');
            col1.classList.add("col");
            col1.innerHTML = data.data[i].materialName;

            var col2 = document.createElement('div');
            col2.classList.add("col");
            col2.innerHTML = data.data[i].stockTime;

            var col3 = document.createElement('div');
            col3.classList.add("col");
            col3.innerHTML = data.data[i].useTime;

            var col4 = document.createElement('div');
            col4.classList.add("col");
            col4.innerHTML = data.data[i].availability;

            var col5 = document.createElement('div');
            col5.classList.add("col-right");
            col5.innerHTML = data.data[i].materialNumber;     

            row.append(col1);
            row.append(col2);
            row.append(col3);
            row.append(col4);
            row.append(col5);

            tableId.append(row);
            
          }
      }else{
          alert('wrong');
      }
    }) 
});