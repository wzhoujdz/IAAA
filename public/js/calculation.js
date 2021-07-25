let homeID = document.getElementById("homeID");
homeID.addEventListener("click", function(){
    window.location.href="../dashboard.html"
});
let revenueId = document.getElementById("revenueId")
revenueId.addEventListener("click", function(){
  window.location.href="../revenue.html"
});
let profitId=document.getElementById("profitId")
profitId.addEventListener("click", function(){
    window.location.href="./profits.html"
});
let fixedCostId=document.getElementById("fixedCostId")
fixedCostId.addEventListener("click", function(){
    window.location.href="./fixedCost.html"
});
let variableCostId=document.getElementById("variableCostId")
variableCostId.addEventListener("click", function(){
    window.location.href="./variableCost.html"
});