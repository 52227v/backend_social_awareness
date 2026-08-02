/*import mysql from "mysql2"

export const db = mysql.createConnection({
  host:"wilproject.mysql.database.azure.com",
  user:"wilproject",
  password: "W!lproject1234",
  database:"social awareness campaign"
})*/
import mysql from "mysql2";

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
