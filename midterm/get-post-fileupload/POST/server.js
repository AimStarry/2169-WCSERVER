var express = require("express");
var app = express();

//require body-parser for this method
var bodyParser = require('body-parser');

// create application/x-www-formurlendcoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res){
    res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/process_post', urlencodedParser, function (req, res){
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(3000, function(){
    console.log('Server running at http://localhost:3000');
});