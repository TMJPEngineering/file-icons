var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var through = require('through2');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
// var pump = require('pump');

var src = {
    less: './src/icons/**/*.less',
    svg: './src/icons/**/*.svg'
};

gulp.task('less', function() {
    return gulp.src(src.less)
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('file-icons.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('less-minify', function() {
    return gulp.src(src.less)
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('file-icons.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('./dist/css'));
});


gulp.task('svg', function() {
    return gulp.src(src.svg)
        .pipe(through.obj(function(file, encryption, cb) {
            // we want to remove the directories and output only the files in the destination
            var tempPath = file.path.split('/');
            tempPath = tempPath[(tempPath.length - 1)];
            //overwrite the path
            file.path = file.base + tempPath;
            cb(null, file);
        }))
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('scripts', function() {
    return gulp.src('./src/scripts/icon-search.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: false
        }))
        .pipe(concat('file-icon.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('scripts-uglify', function(cb) {
    return gulp.src('./src/scripts/icon-search.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: false
        }))
        .pipe(concat('file-icon.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
    gulp.watch(src.less, ['less', 'scripts']);
});

gulp.task('default', ['svg', 'less', 'less-minify', 'scripts', 'scripts-uglify']);
