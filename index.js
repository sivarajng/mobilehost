var express = require('express');
var app = express();
var test = require('./public/json/test');
var categoryList = require('./public/json/categoryList');
var collectionsList = require('./public/json/collectionsList');


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
  response.send('Hello World!')
})

app.get('/json/test', function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(test));
  res.end();
})

app.get('/json/categoryList', function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(categoryList));
  res.end();
})

app.get('/json/collectionsList', function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(collectionsList));
  res.end();
})

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'))
})
