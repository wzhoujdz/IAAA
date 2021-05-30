'use strict'
//set the database, initiate database
const sql = require('sqlite3');
const util = require('util');

// creates a new database object, not a new database. 
const db = new sql.Database("activities.db");

// check if database exists
let cmd = " SELECT name FROM sqlite_master WHERE type='table' AND name='UserInformatoin' ";

db.get(cmd, function (err, val) {
  //conduct the command 
  //If there is no database, then we will create one, 
  //if there is one, we just use the existing one 
  if (val == undefined) {
        console.log("No database file - creating one");
        createUserInformatoin();
  } else {
        console.log("Database file found");
  }
  //create database
});

// called to create table if needed
function createUserInformatoin() {
  // explicitly declaring the rowIdNum protects rowids from changing if the 
  // table is compacted; not an issue here, but good practice
  const cmd = 'CREATE TABLE UserInformatoin (rowIdNum INTEGER PRIMARY KEY, userName TEXT, phoneOrEmail TEXT, password TEXT, securityAnswer TEXT)';
  //rawIDNum is the row number, the only primary key
  db.run(cmd, function(err, val) {
    if (err) {
      console.log("Database creation failure",err.message);
      //set error
    } else {
      console.log("Created database");
    }
  });
}






let cmdMaterial = " SELECT name FROM sqlite_master WHERE type='table' AND name='Material' ";

db.get(cmdMaterial, function (err, val) {
  //conduct the command 
  //If there is no database, then we will create one, 
  //if there is one, we just use the existing one 
  if (val == undefined) {
        console.log("No database file - creating one");
        createMaterial();
  } else {
        console.log("Database file found");
  }
  //create database
});

// called to create table if needed
function createMaterial() {
  // explicitly declaring the rowIdNum protects rowids from changing if the 
  // table is compacted; not an issue here, but good practice
  const cmdMaterial = 'CREATE TABLE Material (rowIdNum INTEGER PRIMARY KEY, materialName TEXT, stockTime TEXT, useTime TEXT, availability INTEGER , materialNumber INTEGER)';
  //rawIDNum is the row number, the only primary key
  db.run(cmdMaterial, function(err, val) {
    if (err) {
      console.log("Database creation failure",err.message);
      //set error
    } else {
      console.log("Created database");
    }
  });
}


let cmdProfit = " SELECT name FROM sqlite_master WHERE type='table' AND name='Profit' ";

db.get(cmdProfit, function (err, val) {
  //conduct the command 
  //If there is no database, then we will create one, 
  //if there is one, we just use the existing one 
  if (val == undefined) {
        console.log("No database file - creating one");
        createProfit();
  } else {
        console.log("Database file found");
  }
  //create database
});

// called to create table if needed
function createProfit() {
  // explicitly declaring the rowIdNum protects rowids from changing if the 
  // table is compacted; not an issue here, but good practice
  const cmdProfit = 'CREATE TABLE Profit (rowIdNum INTEGER PRIMARY KEY, month INTEGER, profit INTEGER)';
  //rawIDNum is the row number, the only primary key
  db.run(cmdProfit, function(err, val) {
    if (err) {
      console.log("Database creation failure",err.message);
      //set error
    } else {
      console.log("Created database");
    }
  });
}


// wrap all database commands in promises
db.run = util.promisify(db.run);
db.get = util.promisify(db.get);
db.all = util.promisify(db.all);

// empty all data from database
db.deleteEverything = async function() {
  await db.run("delete from UserInformatoin");
  await db.run("delete from Material");
  await db.run("delete from Profit");
  db.run("vacuum");
}

// allow code in index.js to use the db object
module.exports = db;

