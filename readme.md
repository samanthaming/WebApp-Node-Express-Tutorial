# Node.js & Express.js

## Node 

`npm init`

## Express 

`npm install express --save`

```javascript 
var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

// app.use(express.static('public'));
// app.use(express.static('src/views')); // http://localhost:5000/index.html

app.get('/', function (req, res) {
    res.send('Hello World'); 
});

app.listen(port, function (err) {
    console.log(`running server on port ${port}`);
    console.log(`Gulp is running my app on PORT: ${port}`);
});
```

#### NPM Start

`npm start`

```javascript 
{
  // ...
  "scripts": {
    "start": "node app.js"
  },
}
```

## Bower 

`npm install bower -g`
`bower init` (enter through with default)

#### 1) Install Bower Packages

- `bower install --save bootstrap`
- `bower install font-awesome --save`

#### 3) Create `.bowerrc` and delete `bower_components` folder

```javascript 
{
    "directory": "public/lib" // this will be the place where bower install its packages  
}
```

And then run `bower install ...`

#### 4) Update the HTML files to use the new path 

```javascript
// <script src="js/bootstrap.min.js"></script>
<script src="lib/bootstrap/dist/js/bootstrap.min.js"></script>
```

We do above, because we point our static folder at public.  
note: there is a better way using gulp

```javascript
app.use(express.static('public')); 
```

## Gulp 

- `npm install -g gulp`  
- `npm install gulp --save-dev`
- `npm install gulp-nodemon --save`

- `npm install gulp-eslint --save-dev`

#### 1) Create gulp file 

_gulpfile.js_

```javascript
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function(){
    nodemon({
        script: 'app.js', // what is it going to run 
        ext: 'js', // what to watch for
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting');
    });
});  
```

To run it: $ `gulp`

## Gulp Wiredep

`npm install wiredep --save-dev`

## Gulp Inject 

`npm install gulp-inject --save-dev`

## Gulp nodemon

`npm install gulp-nodemon --save-dev`

run `gulp serve`

## Jade 

`npm install --save jade`

## Handlebars

`npm install --save express-handlebars`

```javascript 
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index', { title:'Hello from render', list: ['a','b']});
});
```

## EJS 

`npm install --save ejs`

```javascript 
app.set('view engine', '.ejs');
```

## Router

```javascript
// Step 1
var bookRouter = express.Router();

// Step 2
bookRouter.route('/')
    .get(function(req, res) {
        res.render('books'); // it's looking at what we set in "app.set('views', './src/views');"
    });

bookRouter.route('/single') /* /Books/single */
    .get(function(req, res) {
        res.send('Hello Single Book');
    });

// Step 3
app.use('/Books', bookRouter);
```

## MongoDB

- download mongodb 
- `npm install mongodb --save`

### Setting up on Windows

#### 1. Make DB folder

`md \data\db`

#### 2. Add to Environment 

1. Right click mongod and copy the "Location"

2. Create New User Variable 

```md 
Variable name: PATH
Variable value: C:\Program Files\MongoDB\Server\3.2\bin
```

### MongoDB cmd 

To serve: $ mongod  

```javascript
$ mongo libraryApp
$ show collections
$ db.books.find()

// Remove everything from books
db.books.remove({})
``` 

