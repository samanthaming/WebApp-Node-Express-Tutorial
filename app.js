var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
// app.use(express.static('src/views')); // http://localhost:5000/index.html
app.set('views', './src/views');

app.set('view engine', '.ejs');

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
        },
    {
        title: 'Les Misérables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
        },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        read: false
        },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
        },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
        },
    {
        title: 'The Wind in the Willows',
        genre: 'Fantasy',
        author: 'Kenneth Grahame',
        read: false
        },
    {
        title: 'Life On The Mississippi',
        genre: 'History',
        author: 'Mark Twain',
        read: false
        },
    {
        title: 'Childhood',
        genre: 'Biography',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
        }
];

bookRouter.route('/')
    .get(function(req, res) {
        res.render('books', { 
        title:'Books', 
        nav: [
                {Link:'/Books', Text:'Books'},  
                {Link:'/Authors', Text:'Authors'}  
        ],
        books
      });
    });

app.use('/Books', bookRouter);

app.get('/', function (req, res) {
    res.render('index', { 
        title:'Hello from render', 
        nav: [
                {Link:'/Books', Text:'Books'},  
                {Link:'/Authors', Text:'Authors'}  
        ]
    });
});

app.get('/books', function (req, res) {
  res.send('Hello Books');
});

app.listen(port, function (err) {
  console.log('running server on port: ' + port);
});