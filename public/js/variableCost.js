$(document).ready(function(){
    let homeID = document.getElementById("homeID");
    homeID.addEventListener("click", function(){
        window.location.href="../dashboard.html"
    });
    let calculationId = document.getElementById("calculationId");
    calculationId.addEventListener("click", function(){
        window.location.href="../calculation.html"
    });
    
    let addId=document.getElementById("addId");
    addId.addEventListener("click", function(){
        $("#space").append(
        '<div style = "float:left;margin-left: 40px; font-size:20px;margin-top:5px">'+
            '<select id="materialName" class="input">'+
                '<option value="duckNeck">duck neck</option>'+
                '<option value="tofu">tofu</option>'+
            '</select>'+
        '</div>'+
        '<div style = "float:left;margin-left: 35px; font-size:20px;margin-top:5px;">'+               
            '<input style= "width: 120px;height:25px" type="text" id="materialNumber" />'+
        '</div>'+
        '<div style = "float:left;margin-left: 35px; font-size:20px;margin-top:5px;">'+                    
            '<input style= "width: 120px;height:25px" type="text" id="materialCost" />'+
        '</div> '
        )
    });
});