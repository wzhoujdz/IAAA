$(document).ready(function(){
  let homeID = document.getElementById("homeID")
  let searchButtonId = document.getElementById("searchButtonId");
  let tableId = document.getElementById("tableId");
  // set ID for these button
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
    //set the values for the variables I need in this window
    for (var i=0;i<obj.length;i++){ //get the value of radio(used online source, see appendix)
      if(obj[i].checked){
        availability=obj[i].value;
      }//if click that radio button, the data is extracted
    }
     //these lines(14-25) are used to get the value 
    var data = {
        materialName: materialName,
        stockTime: stockTime,
        useTime: useTime,
        availability: availability,
        materialNumber: materialNumber,
    }    
    //send request to the backend
    fetch('/searchTable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(data), 
      })
      .then(response => response.json())
      .then(data => {
        if(data.result=='searchTable successfully'){
            console.log(data);
            //if response is correct, draw the table
            for(var i=0;i<data.data.length;i++){
              //for is used to draw each line
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
            //else, do not draw the table
        }
      }) 
  });
  
  
});