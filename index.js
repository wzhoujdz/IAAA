'use strict'
//get data from the front end
// A server that uses a database. 
// express provides basic server functions
const express = require("express");
// our database operations
const dbo = require('./databaseOps');
// object that provides interface for express
const app = express();
// use this instead of the older body-parser
app.use(express.json());
// make all the files in 'public' available on the Web
app.use(express.static('public'))
// when there is nothing following the slash in the url, return the main page of the app.
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.post('/signIn', async function(request, response, next) {
  // console.log("Server recieved a post request at", request.url);
  // console.log("body",request.body);
  var userName=request.body.userName;
  //data we get from the web (connect to js)
  var phoneOrEmail=request.body.phoneOrEmail;
  var password=request.body.password;
  var securityAnswer=request.body.securityAnswer;
  
  var getItemOfUserNameDBResult=await dbo.getItemOfUserNameDB(userName);
  if(
    getItemOfUserNameDBResult!=undefined&&
    getItemOfUserNameDBResult!=null&&
    getItemOfUserNameDBResult.length>0
    //check whether the username has been used
  ){
    response.send({
      message: "I got your POST request",
      result:'The userName exists'
    });
  }else{
    var result=await dbo.insertUserInformation(userName,phoneOrEmail, password, securityAnswer);
    response.send({
      message: "I got your POST request",
      result:result
    });
  }
  
});

app.post('/loginIn', async function(request, response, next) {
  var userName=request.body.userName;
  var password=request.body.password;
  
  var result=await dbo.getItemOfUserAccountDB(userName,password);
  //find out whether the usernmae and password exist
  //and test whether they can login successfully
  if(
    result!=undefined&&
    result!=null&&
    result.length>0
  ){
    response.send({
      result: "log in successfully",
    });
  }else{
    response.send({
      result: "account does not exist",
    });
  }
  
});



app.post('/reset', async function(request, response, next) {
  var userName=request.body.userName;
  var phoneOrEmail=request.body.phoneOrEmail;
  var securityAnswer=request.body.securityAnswer;
  
  var getItemOfUserInformationDBResult=await dbo.getItemOfUserInformationDB(userName,phoneOrEmail, securityAnswer);
  if(
    getItemOfUserInformationDBResult!=undefined&&
    getItemOfUserInformationDBResult!=null&&
    getItemOfUserInformationDBResult.length>0
    //check whether the reset information is correct
  ){
    response.send({
      result:'The Indentification is ended'
    });
  }else{
    response.send({
      result:'Your input is wrong'
    });//if not correct, output the warning
  }
  
});


app.post('/setNewPassword', async function(request, response, next) {
  var newPassword=request.body.newPassword;
  var confirmNewPassword=request.body.confirmNewPassword;
  var userName=request.body.userName;
  
  var result=await dbo.setNewPasswordDB(newPassword,confirmNewPassword, userName);
  console.log(result);
  if(
    result!=undefined&&
    result!=null&&
    result.length==0
    //check whether the reset information is correct
  ){
    response.send({
      result:'The Indentification is ended'
    });
  }else{
    response.send({
      result:'Your input is wrong'
    });//if not correct, output the warning
  }
  
});


app.post('/searchCharts', async function(request, response, next) {
  var startTime=request.body.startTime;
  var endTime=request.body.endTime;
  
  var result=await dbo.getItemOfProfitDB(startTime,endTime);
  response.send({
    result: "searchCharts successfully",
    data:result,
  });
  
});


app.post('/searchTable', async function(request, response, next) {
  var materialName=request.body.materialName;
  var stockTime=request.body.stockTime;
  var useTime=request.body.useTime;
  var availability=request.body.availability;
  var materialNumber=request.body.materialNumber;
  
  var result=await dbo.getItemOfMaterialDB(materialName,stockTime,useTime,availability,materialNumber);
    response.send({
    result: "searchTable successfully",
    data:result,
  });
  
});


app.post('/inputProfit', async function(request, response, next) {
  var date=request.body.date;
  var costs=request.body.costs;
  var revenue=request.body.revenue;
  console.log("1111111111111111111111111111111111111111");
  console.log(date);
  console.log(costs);
  console.log(revenue)
  
});

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log("The static server is listening on port " + listener.address().port);
});

dbo.testDB().catch(
  function (error) {
    console.log("error:",error);}
);


