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

    
    
});