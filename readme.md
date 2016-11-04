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