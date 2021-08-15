$(document).ready(function(){
    let homeID = document.getElementById("homeID");
      //let is used to define buttons, for clicking and switching the interfaces
    homeID.addEventListener("click", function(){
        window.location.href="../dashboard.html"
    });
    let revenueId = document.getElementById("revenueId")
      //let is used to define buttons, for clicking and switching the interfaces
    revenueId.addEventListener("click", function(){
      window.location.href="../revenue.html"
    });
    let profitId=document.getElementById("profitId")
      //let is used to define buttons, for clicking and switching the interfaces
    profitId.addEventListener("click", function(){
        window.location.href="./profits.html"
    });
    let fixedCostId=document.getElementById("fixedCostId")
      //let is used to define buttons, for clicking and switching the interfaces
    fixedCostId.addEventListener("click", function(){
        window.location.href="./fixedCost.html"
    });
    let variableCostId=document.getElementById("variableCostId")
      //let is used to define buttons, for clicking and switching the interfaces
    variableCostId.addEventListener("click", function(){
        window.location.href="./variableCost.html"
    });
    
});