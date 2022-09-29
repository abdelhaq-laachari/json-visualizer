let mysql = require("mysql");
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "format-json"
});

con.commect(function (err) {
  if (err) throw err;
  console.log("connected");
  let sql = "INSERT INTO users";
});
