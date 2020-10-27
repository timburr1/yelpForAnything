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

module.exports = {
  insertRating: function (ratee, stars, comment) {
    //con.query("INSERT INTO rating VALUES ('" + ratee + "', " + stars + ", '" + comment + "')",
    con.query("INSERT INTO rating VALUES ( ? )", [[ratee, stars, comment]], 
    function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });    
  },

  deleteRating: function (ratee, stars, comment) {
    //TODO
  }
};