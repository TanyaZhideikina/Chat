var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var server = app.listen(3000);

var staticDir = __dirname + '/public/';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var messages = [];
app.get('/', function (req, res) {
  res.sendFile(staticDir + "index.html");
});
app.get('/messages', function (req, res) {
   res.json(messages);
});
app.post('/messages', function (req, res) {
  var message = req.body;
  messages.push(message);
  res.json(message);
} );
