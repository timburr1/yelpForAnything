const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).sendFile('index.html', {
        root: path.resolve('../public')
    });
});

app.get('/admin', (req, res)  => {
    res.status(200).sendFile('admin.html', {
        root: path.resolve('../public')
    });
})

app.get('/insertRating', (request, response)  => {
    
    var ratee = request.query.ratee;
    var stars = request.query.stars;
    var comment = request.url.comment;
    
    insertRating(ratee, stars, comment);

    response.status(200).send( {});
})

app.get('/getRatings', (request, response)  => {
    response.status(200).send( 'This is just a test, not real ratings. Sorry.' );
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


/** DAO stuff: */
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