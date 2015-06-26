var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');

var babelify = require('babelify');
var del = require('del');

var production = (process.env.NODE_ENV === 'production');

gulp.task('clean', function(cb) {
  return del(['public'], cb);
});

gulp.task('default', ['clean', 'scripts'], function() {
  gulp.src('./app/index.html')
    .pipe(gulp.dest('public'));
});

gulp.task('scripts', function() {
  return gulp.src('app/scripts/app.js', {read: false})
    .pipe(browserify({debug: !production, transform: babelify}))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('public/scripts'));
});