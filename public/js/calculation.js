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
    let inputProfitID=document.getElementById("inputProfitID")
      //let is used to define buttons, for clicking and switching the interfaces
    inputProfitID.addEventListener("click", function(){
        window.location.href="./inputProfit.html"
    });

    let showProfitID=document.getElementById("showProfitID")
    //let is used to define buttons, for clicking and switching the interfaces
    showProfitID.addEventListener("click", function(){
      window.location.href="./showProfit.html"
  });
    
});