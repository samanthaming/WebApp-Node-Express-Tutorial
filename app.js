var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views')); // http://localhost:5000/index.html

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/books', function (req, res) {
  res.send('Hello Books');
});

app.listen(port, function (err) {
  console.log('running server on port: ' + port);
});