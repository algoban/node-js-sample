var fs = require ('fs');

var inputfile = "index.html";

var express = require('express');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync(inputfile);

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
