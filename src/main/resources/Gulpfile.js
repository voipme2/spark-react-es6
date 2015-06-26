var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var babelify = require('babelify');
var del = require('del');

gulp.task('clean', function(cb) {
  return del(['public'], cb);
});

gulp.task('default', ['clean'], function() {
  gulp.src('./app/index.html')
    .pipe(gulp.dest('public'));

  gulp.src('./app/scripts/app.js')
    .pipe(browserify({
      transform: babelify,
      insertGlobals: true
    }))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('public/scripts'));
});