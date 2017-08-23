const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
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
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/zone.js/dis/zone.js'
    ])
    .pipe(gulp.dest('dist/lib'))
});

// gulp.task('less', function() {
//   return gulp.src('src/static/css/styles.less')
//     .pipe(less())
//     .pipe(gulp.dest('dist/css/'))
// });

gulp.task('less', function() {
	gulp.src('src/static/css/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist/css'))
});

gulp.task('build', ['clean', 'copy:libs', 'less']);
gulp.task('default', ['clean', 'copy:libs', 'less' ]);