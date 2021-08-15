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
    
    let submitId = document.getElementById("submitId");
    //define buttons for clicking 
    submitId.addEventListener("click", function(){
        var employmentFees=$("#employmentFees").val();
        console.log(employmentFees);
        //define and output value
        var rentalFees = $("#rentalFees").val();
        console.log(rentalFees);
        //define and output value
        var utilityFees = $("#utilityFees").val();
        console.log(utilityFees);
        //define and output value
        var total = parseFloat(employmentFees)+parseFloat(rentalFees)+parseFloat(utilityFees);
        console.log(total);
        //define and output value
        
        $("#space").html('');
        $("#space").append(
            '<div class="format">'+
                'employment fees: $'+employmentFees+
            '</div>'+
            '<div class="format">'+
                'rental fees: $' + rentalFees+
            '</div>'+
            '<div class="format">'+
                'utility fees: $' + utilityFees+
            '</div>'
        )
        $("#totalCost").append(
            '<div class="format2">'+
                "$"+
                total+
            '</div>'
        )
    
    });

    let resetId=document.getElementById("resetId");
    //define buttons for clicking 
    resetId.addEventListener("click", function(){
        $("#space").html('');
        $("#employmentFees").val('');
        $("#rentalFees").val('');
        $("#utilityFees").val('');
        $("#totalCost").html('');
    });
});