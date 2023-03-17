require('dotenv').config();
var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "movie-review.cyj8ojeki8fn.eu-north-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "aws12345",
  database: "movie_review",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

var express = require("express");
var app = express();
app.route("/mysql").get(fromMYSQL);

function fromMYSQL(req, res) {
  var sql = "select * from shows";
  connection.query(sql, (err, result) => {
    console.log(result);
    res.send(result);
  });
}

let PORT = process.env.PORT || 8000;

console.log(process.env.PORT)

app.listen(PORT, () => {
  console.log(`server listed on ${PORT}`)
});
console.log("http://127.0.0.1:3000/mysql");
// secretkey:===ZogxeagoGHd1JLBaRlV9ffchlazFZ+JEqVE9q6p7
// Accesskey====AKIAVNOPPDP6LC2WMS3A