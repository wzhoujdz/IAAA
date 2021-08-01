$(document).ready(function(){
    let homeID = document.getElementById("homeID");
    homeID.addEventListener("click", function(){
        window.location.href="../dashboard.html"
    });
    let calculationId = document.getElementById("calculationId");
    calculationId.addEventListener("click", function(){
        window.location.href="../calculation.html"
    });
    
    let submitId = document.getElementById("submitId");
    submitId.addEventListener("click", function(){
        var employmentFees=$("#employmentFees").val();
        console.log(employmentFees);
        
        var rentalFees = $("#rentalFees").val();
        console.log(rentalFees);

        var utilityFees = $("#utilityFees").val();
        console.log(utilityFees);

        var total = parseFloat(employmentFees)+parseFloat(rentalFees)+parseFloat(utilityFees);
        console.log(total);

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
    resetId.addEventListener("click", function(){
        $("#space").html('');
        $("#employmentFees").val('');
        $("#rentalFees").val('');
        $("#utilityFees").val('');
        $("#totalCost").html('');
    });
});