'use strict'

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
  //从网页拿到的值
  var phoneOrEmail=request.body.phoneOrEmail;
  var password=request.body.password;
  var securityAnswer=request.body.securityAnswer;
  
  var getItemOfUserNameDBResult=await dbo.getItemOfUserNameDB(userName);
  //要找有没有username，有的话就说我有了（if里面
  //没有就说else里面，我知道了
  if(
    getItemOfUserNameDBResult!=undefined&&
    getItemOfUserNameDBResult!=null&&
    getItemOfUserNameDBResult.length>0
  ){
    response.send({
      message: "I got your POST request",
      result:'The userName exists'
    });
  }else{
    var result=await dbo.insertUserInformatoin(userName,phoneOrEmail, password, securityAnswer);
    // console.log(result);
    response.send({
      message: "I got your POST request",
      result:result
    });
  }

});

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log("The static server is listening on port " + listener.address().port);
});

/*
// call the async test function for the database
// this is an example showing how the database is used
// you will eventually delete this call.*/
dbo.testDB().catch(
  function (error) {
    console.log("error:",error);}
);


