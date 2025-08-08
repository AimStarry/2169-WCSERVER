var express = require('express');
var app = express();

//This responds with "Hello World" on the homepage
app.get('/', function(req, res){
    console.log("There is GET request for the homepage!");
    res.send('Here is the GET method!');
});

//This responds a POST request for the homepage
app.post('/', function(req, res){
    console.log("A POST request for the homepage is accessed.");
    res.send('Here is the POST method');
});

//This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res){
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Match Page');
});

//This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/list_user', function(req, res){
    console.log("list_user is running");
    res.send('This is Page Listing!');
});

//profile
app.get('/profile', function(req, res){
    console.log("Aimee is running");
    res.send('Aimee Pangan');
});

var server = app.listen(4000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});