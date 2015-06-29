var gulp = require('gulp');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');

var browserify = require('browserify');
var babelify = require('babelify');
var del = require('del');
var source = require('vinyl-source-stream');
var resolve = require('resolve');

var production = (process.env.NODE_ENV === 'production');

gulp.task('default', ['clean', 'vendor', 'scripts'], function() {
  gulp.src('./app/index.html')
    .pipe(gulp.dest('public'));
});

gulp.task('clean', function(cb) {
  return del(['public'], cb);
});

gulp.task('vendor', function() {
  var b = browserify({debug: !production});

  getNPMPackageIds().forEach(function(id) {
    b.require(resolve.sync(id), {expose: id});
  });

  return b.bundle().pipe(source('vendor.js'))
    .pipe(gulpif(production, streamify(uglify())))
    .pipe(rename('vendor.min.js'))
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('scripts', function() {
  var b = browserify({debug: !production})
    .require('./app/scripts/app.js', {entry: true})
    .transform(babelify);

  getNPMPackageIds().forEach(function(id) {
    b.external(id);
  });

  return b.bundle().pipe(source('scripts.js'))
    .pipe(gulpif(production, streamify(uglify())))
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('./public/scripts'));
});

function getNPMPackageIds() {
  // read package.json and get dependencies' package ids
  var packageManifest = {};
  try {
    packageManifest = require('./package.json');
  } catch (e) {
    // does not have a package.json manifest
  }
  return Object.keys(packageManifest.dependencies) || [];

}