var gulp = require('gulp'),
    eslint = require('gulp-eslint');  

var jsFiles = ['*.js', 'src/**/*.js','!node_modules/**'];

gulp.task('style', function () {
  return gulp.src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    // Brick on failure to be super strict
    .pipe(eslint.failOnError());
});

gulp.task('inject', function () {
  var wiredep = require('wiredep').stream;
  var options = {
    bowerJson: require('./bower.json'),
    directory: './public/lib',
    ignorePath: '../../public'
  };

  return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(gulp.dest('./src/views'));
});