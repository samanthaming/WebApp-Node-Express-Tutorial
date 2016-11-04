var gulp = require('gulp'),
  eslint = require('gulp-eslint');
  nodemon = require('gulp-nodemon');  

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
  var inject = require('gulp-inject');

  var injectSrc = gulp.src(['./public/css/*.css',
                            './public/js/*.js'], {read: false});

  var injectOptions = {
    ignorePath: '/public'
  };

  var options = {
    bowerJson: require('./bower.json'),
    directory: './public/lib',
    ignorePath: '../../public'
  };

  return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], function () {
  var options = {
    script: 'app.js',
    delayTime: 1,
    env: {
      'PORT': 3000
    },
    watch: jsFiles
  };

  return nodemon(options)
    .on('restart', function (ev) {
      console.log('Restarting...');
    }); 
});
