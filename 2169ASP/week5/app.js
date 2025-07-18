var http = require('http');

var root = require('./modules/root_module');
var about = require('./modules/about_module');
var contact = require('./modules/contact_module');
var footer = require('./modules/footer_module');
var gallery = require('./modules/gallery_module');

var server = http.createServer(function (req, res) {
    var name = "John Smith";
    if (req.url == '/') {
        res.end(root(name));
    }

    else if  (req.url == "/about") {
        res.end(about(name));
    }

    else if  (req.url == "/contact") {

        res.end(contact(name));
    }
    else if  (req.url == "/footer") {

        res.end(footer(name));
    }
    else if  (req.url == "/gallery") {

        res.end(gallery(name));
    }

    else {
    res.end('Invalid Request!');
    }
});

server.listen(5002);
console.log('Node.js web server at port 5002 is running...')