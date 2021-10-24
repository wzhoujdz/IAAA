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
    //define variable
    let addId=document.getElementById("addId");
    //define variable
    addId.addEventListener("click", function(){
        //set the event listener 
        spaceItemNumber=spaceItemNumber+1;
        //when clicking, the number will increase, so there will be a line more
        $("#space").append(
        '<div style = "float:left;margin-left: 40px; font-size:20px;margin-top:5px">'+
            '<select id="materialName'+spaceItemNumber+'" class="input">'+
                '<option value="duck neck">duck neck</option>'+
                '<option value="tofu">tofu</option>'+
                '<option value="vegetable">vegetable</option>'+
                '<option value="sauages">sauages</option>'+
                '<option value="stewed pork leg">stewed pork leg</option>'+
                '<option value="smoked fish">smoked fish</option>'+
            '</select>'+
        '</div>'+
        '<div style = "float:left;margin-left: 35px; font-size:20px;margin-top:5px;">'+               
            '<input style= "width: 120px;height:25px" type="text" id="materialNumber'+spaceItemNumber+'" />'+
        '</div>'+
        '<div style = "float:left;margin-left: 35px; font-size:20px;margin-top:5px;">'+                    
            '<input style= "width: 120px;height:25px" type="text" id="materialCost'+spaceItemNumber+'" />'+
        '</div> '
        )
        //here is for adding a line into the place, adding spaceItemNumber helps me to detect the time and for a better calculation
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

    let resetId=document.getElementById("resetId");
    resetId.addEventListener("click", function(){
        for(let i=1;i<=spaceItemNumber;i++){
            $("#materialNumber"+i).val(null);
            $("#materialCost"+i).val(null);
        }
        $("#dateLeft").val(null);
        $("#dateRight").val(null);
        $("#totalCostValueId").html(null);
        $("#showArea").html(null);
    });

});
