const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to SQlite in-memory database');

    var createTable = "CREATE TABLE IF NOT EXISTS rating (ratee VARCHAR(256), stars TINYINT, comment VARCHAR(1024));";
    db.query(createTable, function (e, result) {
     if (e) throw e;
     console.log("Rating table created");
    });
  });



module.exports = {
  deleteRating: function (ratee, stars, comment) {
    //TODO
  },
  
  getAllRatings: function() {
    //TODO
  },
  
  insertRating: function (ratee, stars, comment) {
    db.query("INSERT INTO rating VALUES ( ? )", [[ratee, stars, comment]], 
    function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });    
  }
};
