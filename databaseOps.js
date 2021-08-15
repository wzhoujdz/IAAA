'use strict'
const db = require('./sqlWrap');
const insertDB = "insert into UserInformatoin (userName, phoneOrEmail, password, securityAnswer ) values (?,?,?,?)"
const getItemOfUserName = "select * from UserInformatoin where userName = ?";
const getItemOfUserAccount = "select * from UserInformatoin where userName = ? and password = ?";
const getItemOfUserInformation = "select * from UserInformatoin where userName = ? and phoneOrEmail = ? and securityAnswer = ? ";
const selectAllDB = "select * from UserInformatoin";
const insertDBMaterial = "insert into Material (materialName, stockTime, useTime, availability ,materialNumber) values (?,?,?,?,?)"
const insertDBProfit = "insert into Profit (month, profit) values (?,?)"
const setNewPassword = "update UserInformatoin set password = ? where userName = ?"
//在数据库里搜索
async function testDB () {
  await db.deleteEverything();
  //insert data into the search page
  await db.run(insertDBMaterial,["spicy duck neck",'2021-08-01','2021-08-02',1,20]);
  await db.run(insertDBMaterial,["spicy duck neck",'2021-08-02','2021-08-03',1,15]);
  await db.run(insertDBMaterial,["cured meat",'2021-08-02','2021-08-03',0,0]);
  await db.run(insertDBMaterial,["spicy duck neck",'2021-08-03','2021-08-04',0,0]);
  await db.run(insertDBMaterial,["cured meat",'2021-08-03','2021-08-04',1,80]);
  //insert the data into the charts page
  await db.run(insertDBProfit,[1,300]);
  await db.run(insertDBProfit,[2,200]);
  await db.run(insertDBProfit,[3,350]);
  await db.run(insertDBProfit,[4,420]);
  await db.run(insertDBProfit,[5,530]);
  await db.run(insertDBProfit,[6,260]);
  await db.run(insertDBProfit,[7,370]);
  await db.run(insertDBProfit,[8,480]);
  await db.run(insertDBProfit,[9,690]);
  await db.run(insertDBProfit,[10,300]);
  await db.run(insertDBProfit,[11,610]);
  await db.run(insertDBProfit,[12,420]);
}
//插入数据
//insert data into database
async function insertUserInformatoin (userName,phoneOrEmail, password, securityAnswer) {
  await db.run(insertDB,[userName,phoneOrEmail, password, securityAnswer]);
  var result = await db.all(selectAllDB);
  console.log(result);
  return result;
}
//to get the data of the user in the forget password page
async function getItemOfMaterialDB (materialName, stockTime, useTime, availability ,materialNumber) {
  const selectAllDBMaterial = "select * from Material where materialName = ? and stockTime = ? and useTime = ? and availability = ? and materialNumber = ?";
  let result = await db.all(selectAllDBMaterial,[materialName, stockTime, useTime, availability ,materialNumber]);
  console.log(result);
  return result;
}
// to get the values of material in the search interface in the database
async function getItemOfProfitDB (startTime, endTime) {
  const selectAllDBProfit = "select * from Profit where month >= ? and month <= ?";
  let result = await db.all(selectAllDBProfit,[startTime, endTime]);
  console.log(result);
  return result;
}
//to get the values of profit in the charts interface in the database-
// async function getItemOfUserNameDB (userName) {
//   let result = await db.all(getItemOfUserName,[userName]);
//   console.log(result);
//   return result;
// }
async function getItemOfUserNameDB (userName) {
  let result = await db.all("select * from UserInformatoin");
  console.log(result);
  let returnResult=[];
  for(var i=0;i<result.length;i++){
    if(result[i].userName==userName){
      returnResult.push(result[i]);
    }
  }
  return returnResult;
}
//to get the values of username in the database
async function getItemOfUserInformationDB (userName,phoneOrEmail,securityAnswer) {
  let result = await db.all(getItemOfUserInformation,[userName,phoneOrEmail,securityAnswer]);
  console.log(result);
  return result;
}

//to get the values of username in the database
async function setNewPasswordDB (newPassword,confirmNewPassword, userName) {
  let result = await db.all(setNewPassword,[newPassword,userName]);
  var resultAll = await db.all(selectAllDB);
  console.log(resultAll);
  console.log(result);
  return result;
}

//to get above values of user information in the database
async function getItemOfUserAccountDB (userName,password) {
  var resultAll = await db.all(selectAllDB);
  console.log(resultAll);
  let result = await db.all(getItemOfUserAccount,[userName,password]);
  console.log(result);
  return result;
}
//to get above values of User in the database



module.exports.insertUserInformatoin = insertUserInformatoin;
module.exports.testDB = testDB;
module.exports.getItemOfUserNameDB = getItemOfUserNameDB;
module.exports.getItemOfUserInformationDB = getItemOfUserInformationDB;
module.exports.setNewPasswordDB = setNewPasswordDB;
module.exports.getItemOfUserAccountDB = getItemOfUserAccountDB;
module.exports.getItemOfMaterialDB = getItemOfMaterialDB;
module.exports.getItemOfProfitDB = getItemOfProfitDB;
//to export these values from the database for my use


