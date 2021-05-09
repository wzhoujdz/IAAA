'use strict'

// using a Promises-wrapped version of sqlite3
const db = require('./sqlWrap');

// SQL commands for UserInformatoin
const insertDB = "insert into UserInformatoin (userName, phoneOrEmail, password, securityAnswer ) values (?,?,?,?)"
const getOneDB = "select * from UserInformatoin where userName = ?";
//get one db 从database选username=？的值
const selectAllDB = "select * from UserInformatoin";

async function testDB () {
  // for testing, always use today's date
  //const today = new Date().getTime();
  // all DB commands are called using await

  // empty out database - probably you don't want to do this in your program
  await db.deleteEverything();
  // return;
  // await db.run(insertDB,["swim",1619625600000,-1]); //2021-4-29
  // await db.run(insertDB,["swim",1619539200000,-1]); //2021-4-28
  // await db.run(insertDB,["swim",1619452800000,-1]); //2021-4-27
  // await db.run(insertDB,["swim",1617206400000,-1]); //2021-4-1
  //console.log("inserted two items");

  // look at the item we just inserted
  //let result = await db.get(getOneDB,["running",today,2.4]);
  // console.log(result);
  // get multiple items as a list
  //result = await db.all(allDB,["Walk"]);
  //console.log(result);
}

async function insertUserInformatoin (userName,phoneOrEmail, password, securityAnswer) {
  await db.run(insertDB,[userName,phoneOrEmail, password, securityAnswer]);
  var result = await db.all(selectAllDB);
  // console.log(result);
  return result;
}





module.exports.insertUserInformatoin = insertUserInformatoin;
module.exports.testDB = testDB;

