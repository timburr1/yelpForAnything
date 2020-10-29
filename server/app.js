const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
//const dao = require('./mysqlDao.js');
const dao = require('./sqliteDao.js');

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
    var comment = request.query.comment;
    
    dao.insertRating(ratee, stars, comment);

    response.status(200).send( {});
})

app.get('/getRatings', (request, response)  => {
    //TODO: connect to the database, select all ratings, and return them in an HTML table or similar
    response.status(200).send( 'This is just a test, not real ratings. Sorry.' );
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});