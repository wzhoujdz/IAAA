'use strict'

const sql = require('sqlite3');
const util = require('util');

// creates a new database object, not a 
// new database. 
const db = new sql.Database("activities.db");

// check if database exists
let cmd = " SELECT name FROM sqlite_master WHERE type='table' AND name='UserInformatoin' ";

db.get(cmd, function (err, val) {
  //执行cmd命令
  //如果没有数据库就创建，如果有就使用有的
  if (val == undefined) {
        console.log("No database file - creating one");
        createUserInformatoin();
        //meiyou jiu lai zheli
  } else {
        console.log("Database file found");
  }
});

// called to create table if needed
function createUserInformatoin() {
  // explicitly declaring the rowIdNum protects rowids from changing if the 
  // table is compacted; not an issue here, but good practice
  const cmd = 'CREATE TABLE UserInformatoin (rowIdNum INTEGER PRIMARY KEY, userName TEXT, phoneOrEmail TEXT, password TEXT, securityAnswer TEXT)';
  //rawid行号； primary key：唯一标识；；；
  db.run(cmd, function(err, val) {
    if (err) {
      console.log("Database creation failure",err.message);
      //err message为设定好的
    } else {
      console.log("Created database");
    }
  });
}

// wrap all database commands in promises
db.run = util.promisify(db.run);
db.get = util.promisify(db.get);
db.all = util.promisify(db.all);

// empty all data from db
db.deleteEverything = async function() {
  await db.run("delete from UserInformatoin");
  db.run("vacuum");
}
//async await 异步执行，同步相应

// allow code in index.js to use the db object
module.exports = db;

