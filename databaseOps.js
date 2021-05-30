'use strict'
//set the database
// using a Promises-wrapped version of sqlite3
const db = require('./sqlWrap');
//set the database
// SQL commands for UserInformatoin
const insertDB = "insert into UserInformatoin (userName, phoneOrEmail, password, securityAnswer ) values (?,?,?,?)"
//insert the database with these userInformation
const getItemOfUserName = "select * from UserInformatoin where userName = ?";
//get this database to get username's value, and being used in account creating
const getItemOfUserAccount = "select * from UserInformatoin where userName = ? and password = ?";
//get this database to get the above values, and being used in sign in
const getItemOfUserInformation = "select * from UserInformatoin where userName = ? and phoneOrEmail = ? and securityAnswer = ? ";
//get this database to get the above values, and being used in forget password
const selectAllDB = "select * from UserInformatoin";
// it's to get all value for the database


const insertDBMaterial = "insert into Material (materialName, stockTime, useTime, availability ,materialNumber) values (?,?,?,?,?)"

const insertDBProfit = "insert into Profit (month, profit) values (?,?)"
async function testDB () {
  await db.deleteEverything();
  await db.run(insertDBMaterial,["spicy duck neck",'2021-05-01','2021-05-02',1,5]);
  await db.run(insertDBMaterial,["spicy duck neck",'2021-05-01','2021-05-02',1,5]);
  await db.run(insertDBMaterial,["spicy duck neck",'2021-05-03','2021-05-04',0,50]);
  await db.run(insertDBMaterial,["spicy duck neck",'2021-05-03','2021-05-04',0,50]);
  await db.run(insertDBMaterial,["spicy duck neck",'2021-05-03','2021-05-04',0,50]);
  await db.run(insertDBMaterial,["spicy duck neck",'2021-05-05','2021-05-06',1,5]);

  await db.run(insertDBProfit,[1,10]);
  await db.run(insertDBProfit,[2,20]);
  await db.run(insertDBProfit,[3,30]);
  await db.run(insertDBProfit,[4,40]);
  await db.run(insertDBProfit,[5,50]);
  await db.run(insertDBProfit,[6,60]);
  await db.run(insertDBProfit,[7,70]);
  await db.run(insertDBProfit,[8,80]);
  await db.run(insertDBProfit,[9,90]);
  await db.run(insertDBProfit,[10,100]);
  await db.run(insertDBProfit,[11,110]);
  await db.run(insertDBProfit,[12,120]);

}
//it's a test function during the way to set the database

async function insertUserInformatoin (userName,phoneOrEmail, password, securityAnswer) {
  await db.run(insertDB,[userName,phoneOrEmail, password, securityAnswer]);
  var result = await db.all(selectAllDB);
  return result;
}
//it's to insert the information I need into the database

async function getItemOfMaterialDB (materialName, stockTime, useTime, availability ,materialNumber) {
  const selectAllDBMaterial = "select * from Material where materialName = ? and stockTime = ? and useTime = ? and availability = ? and materialNumber = ?";
  let result = await db.all(selectAllDBMaterial,[materialName, stockTime, useTime, availability ,materialNumber]);
  console.log(result);
  return result;
}

async function getItemOfProfitDB (startTime, endTime) {
  const selectAllDBProfit = "select * from Profit where month >= ? and month <= ?";
  let result = await db.all(selectAllDBProfit,[startTime, endTime]);
  // const selectAllDBProfit = "select * from Profit";
  // let result = await db.all(selectAllDBProfit);
  console.log(result);
  return result;
}


async function getItemOfUserNameDB (userName) {
  let result = await db.all(getItemOfUserName,[userName]);
  console.log(result);
  return result;
}
//to get the values of username in the database
async function getItemOfUserInformationDB (userName,phoneOrEmail,securityAnswer) {
  let result = await db.all(getItemOfUserInformation,[userName,phoneOrEmail,securityAnswer]);
  console.log(result);
  return result;
}
//to get above values of username in the database
async function getItemOfUserAccountDB (userName,password) {
  var resultAll = await db.all(selectAllDB);
  console.log('resultAll1111111111111111111111111111');
  console.log(resultAll);
  let result = await db.all(getItemOfUserAccount,[userName,password]);
  console.log('result2222222222222222222222222222222');
  console.log(result);
  return result;
}
//to get above values of username in the database



module.exports.insertUserInformatoin = insertUserInformatoin;
module.exports.testDB = testDB;
module.exports.getItemOfUserNameDB = getItemOfUserNameDB;
module.exports.getItemOfUserInformationDB = getItemOfUserInformationDB;
module.exports.getItemOfUserAccountDB = getItemOfUserAccountDB;
module.exports.getItemOfMaterialDB = getItemOfMaterialDB;
module.exports.getItemOfProfitDB = getItemOfProfitDB;


//to export these values from the database for my use


