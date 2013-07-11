var express = require('express');
var fs = require('fs');
var file = fs.readFileSync('index.html');
//var fs = require('fs');
var app = express.createServer(express.logger());
//fs.readFileSync("index.html"),"utf-8");
app.get('/', function(request, response) {
  response.send(file.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
