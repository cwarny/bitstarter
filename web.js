var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var mess = fs.readFile('./index.html','utf8', function (err,data) {
    if (err) {
     // return console.log(err);
     response.send("Problem");
    } else {
     response.send(mess);
    }
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
