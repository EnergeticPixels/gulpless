var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var rename = require('gulp-rename');

var parentPath = './bower_components/bootstrap-less/';
var sourceLess = parentPath + 'less';
var targetCss = './dist/css';

gulp.task('lStyle', function () {
    return gulp.src([sourceLess + '/bootstrap.less']) 
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(less({compress: true}))
        .pipe(autoprefixer('last 2 versions', 'ie 9'))
        .pipe(minifyCSS({keepBreaks: false}))
		.pipe(rename('style.min.css'))
        .pipe(gulp.dest(targetCss))
        .pipe(notify("Less Compiled, Prefixed and Minified"));
});

gulp.task('default', gulp.parallel('lStyle'));