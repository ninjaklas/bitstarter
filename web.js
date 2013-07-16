var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
var buf = new Buffer(fs.readFileSync("index.html"));
var content = buf.toString('utf-8');

app.get('/', function(request, response) {
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});