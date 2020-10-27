var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sqluser",
  password: "sqluserpw",
  database: "yelp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var createTable = "CREATE TABLE IF NOT EXISTS rating (ratee VARCHAR(256), stars TINYINT, comment VARCHAR(1024));";
  con.query(createTable, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

function insertRating(ratee, stars, comment) {
    var query = con.query("INSERT INTO rating VALUES (" + con.escape(ratee) + ", " + stars + ", " + con.escape(comment) + ");",
    function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
};