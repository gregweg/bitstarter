var express = require('express');
fs = require('fs')

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var index = fs.readFileSync('index.html');
  //response.send('Hello World2!');
  response.send(index.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
