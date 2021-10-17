$(document).ready(function(){
    let totalRevenueValue=0;
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
        '<div style = "float:left;margin-left: 35px; font-size:20px;margin-top:5px">'+
            '<select id="foodName'+spaceItemNumber+'" class="input">'+
                '<option value="spicy duck neck">spicy duck neck</option>'+
                '<option value="cured meat">cured meat</option>'+
                ' <option value="marinated trotters">marinated trotters</option>'+ 
            '</select>'+
        '</div>'+
        '<div style = "float:left;margin-left: 30px; font-size:20px;margin-top:5px;">'+                    
                '<input style= "width: 90px;height:25px" type="text" id="foodNumber'+spaceItemNumber+'" />'+
        '</div>'+
        '<div style = "float:left;margin-left: 30px; font-size:20px;margin-top:5px;">'+                  
                '<input style= "width: 90px;height:25px" type="text" id="foodPrice'+spaceItemNumber+'" />'+
            '</div> '+
        '<div style = "float:left;margin-left:30px; font-size:20px;margin-top:5px;">  '   +                
            '<input style= "width: 90px;height:25px" type="text" id="discount'+spaceItemNumber+'" />'+
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
            let thisFoodName=$("#foodName"+i).val();
            let thisFoodNumber=parseFloat($("#foodNumber"+i).val());
            let thisFoodPrice=parseFloat($("#foodPrice"+i).val());
            let thisDiscount=parseFloat($("#discount"+i).val());
            submitGetAllValue.push({
                foodName:thisFoodName,
                foodNumber:thisFoodNumber,
                foodPrice:thisFoodPrice,
                discount:thisDiscount
            })
        }
        console.log(submitGetAllValue);
        totalRevenueValue=0;
        for(let i=0;i<submitGetAllValue.length;i++){
            $("#showArea").append(
                '<div style = "float:left;font-size:20px;margin-top:5px;width:400px;text-align:center;">'+
                submitGetAllValue[i].foodName+'+'+submitGetAllValue[i].foodNumber+'+$'+submitGetAllValue[i].foodPrice+'+'+submitGetAllValue[i].discount+
                '</div> '
            ) 
            totalRevenueValue=totalRevenueValue+submitGetAllValue[i].foodNumber*submitGetAllValue[i].foodPrice*submitGetAllValue[i].discount
        }
        $("#totalRevenueId").html('$'+totalRevenueValue);
    });
    
    let resetId=document.getElementById("resetId");
    resetId.addEventListener("click", function(){
        for(let i=1;i<=spaceItemNumber;i++){
            $("#foodNumber"+i).val(null);
            $("#foodPrice"+i).val(null);
            $("#discount"+i).val(null);
        }
        $("#dateLeft").val(null);
        $("#dateRight").val(null);
        $("#totalRevenueId").html(null);
        $("#showArea").html(null);
    });

    $("#nextId").click(function(){
        window.location.href="/inputProfit.html?date="+$("#dateLeft").val()+'&revenue='+totalRevenueValue;
    });
    
});