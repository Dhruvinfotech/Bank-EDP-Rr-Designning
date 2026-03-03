const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({   // create pool is used for a place where all the connections are stored.
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,   //at a time only 10 users can query DB at same time.
  queueLimit: 0
 
});
 module.exports = pool.promise(); //allows other files to use database.
