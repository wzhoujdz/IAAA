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
});