$(document).ready(function(){
    let homeID = document.getElementById("homeID");
    homeID.addEventListener("click", function(){
        window.location.href="../dashboard.html"
    });
    let calculationId = document.getElementById("calculationId");
    calculationId.addEventListener("click", function(){
        window.location.href="../calculation.html"
    });
    let spaceItemNumber=1;
    let addId=document.getElementById("addId");
    addId.addEventListener("click", function(){
        spaceItemNumber=spaceItemNumber+1;
        $("#space").append(
        '<div style = "float:left;margin-left: 40px; font-size:20px;margin-top:5px">'+
            '<select id="materialName'+spaceItemNumber+'" class="input">'+
                '<option value="duck neck">duck neck</option>'+
                '<option value="tofu">tofu</option>'+
                '<option value="vegetable">vegetable</option>'+
            '</select>'+
        '</div>'+
        '<div style = "float:left;margin-left: 35px; font-size:20px;margin-top:5px;">'+               
            '<input style= "width: 120px;height:25px" type="text" id="materialNumber'+spaceItemNumber+'" />'+
        '</div>'+
        '<div style = "float:left;margin-left: 35px; font-size:20px;margin-top:5px;">'+                    
            '<input style= "width: 120px;height:25px" type="text" id="materialCost'+spaceItemNumber+'" />'+
        '</div> '
        )
    });

    

    let submitId=document.getElementById("submitId");
    let dateLeft = document.getElementById("dateLeft");
    let dateRight = document.getElementById("dateRight");
    submitId.addEventListener("click", function(){
        let submitGetAllValue=[];
        $("#dateRight").val($("#dateLeft").val());
        for(let i=1;i<=spaceItemNumber;i++){
            let thisMaterialName=$("#materialName"+i).val();
            let thisMaterialNumber=parseFloat($("#materialNumber"+i).val());
            let thisMaterialCost=parseFloat($("#materialCost"+i).val());
            submitGetAllValue.push({
                materialName:thisMaterialName,
                materialNumber:thisMaterialNumber,
                materialCost:thisMaterialCost
            })
        }
        console.log(submitGetAllValue);
        let totalCostValue=0;
        for(let i=0;i<submitGetAllValue.length;i++){
            $("#showArea").append(
                '<div style = "float:left;font-size:20px;margin-top:5px;width:400px;text-align:center;">'+
                submitGetAllValue[i].materialName+'+'+submitGetAllValue[i].materialNumber+'grams+$'+submitGetAllValue[i].materialCost+
                '</div> '
            ) 
            totalCostValue=totalCostValue+submitGetAllValue[i].materialNumber*submitGetAllValue[i].materialCost
        }
        $("#totalCostValueId").html('$'+totalCostValue);
    });



});