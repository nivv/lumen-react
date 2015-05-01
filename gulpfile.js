var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');


gulp.task('browserify', function() {
    return browserify('./app/React/app.js')
        .transform(babelify, {stage: 0})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public/build'))
});

gulp.task('minify', function() {
    return gulp.src('public/build/bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/build'));
});

gulp.task('watch', function() {
    gulp.watch('app/React/**/*.js', ['browserify'])
});