const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat')
var less = require('gulp-less');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js'
    ])
    .pipe(gulp.dest('dist/lib'))
});

gulp.task('less', function() {
  return gulp.src('src/static/less/*.less')
    .pipe(concat('styles.css'))
    .pipe(less())
    .pipe(gulp.dest('src/styles'))
});

gulp.task('build', ['clean', 'copy:libs', 'less', 'compile']);
gulp.task('default', ['clean', 'copy:libs', 'less' ]);