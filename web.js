var express = require('express');
var fs = require('fs');
//var file= fs.readFileSync("index.html");
//var buf= new Buffer();
var app = express.createServer(express.logger());
//fs.readFileSync("index.html"),"utf-8");
app.get('/', function(request, response) {
response.send(fs.readFileSync('index.html').toString());  
//response.send(buf.toString(file,'utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
