var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');

var SOURCE_FILE = 'index.html';
var TARGET = '../';
var CONTENT_REPLACE = 'REPLACE_ME';


gulp.task('build', function () {

    var slides = fs.readdirSync('.').filter(function(fileName) {
        return fileName.indexOf('.txt') > -1;
    }).map(function(fileName) {
        return fs.readFileSync(fileName, 'utf8')
    }).join('\n\n\n\n\n');


    return gulp.src(SOURCE_FILE)
        .pipe(replace(CONTENT_REPLACE, slides))
        .pipe(gulp.dest(TARGET));
});

gulp.task('watch', function () {
    gulp.start('build');
    gulp.watch('*.txt', ['build']);
});