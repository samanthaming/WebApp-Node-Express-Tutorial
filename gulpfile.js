var gulp = require('gulp'),
    eslint = require('gulp-eslint');  

var jsFiles = ['*.js', 'src/**/*.js','!node_modules/**'];

// We want
gulp.task('style', function () {
  return gulp.src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    // Brick on failure to be super strict
    .pipe(eslint.failOnError());
});
