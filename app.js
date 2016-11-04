var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
// app.use(express.static('src/views')); // http://localhost:5000/index.html
app.set('views', './src/views');

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index', { title:'Hello from render', list: ['a','b']});
});

app.get('/books', function (req, res) {
  res.send('Hello Books');
});

app.listen(port, function (err) {
  console.log('running server on port: ' + port);
});