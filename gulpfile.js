var gulp   = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyJS = require('gulp-minify');

var jsFiles = 'src/js/*.js',
    jsDest = 'dist/js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('spartan-multi-image-picker.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(minifyJS())
        .pipe(gulp.dest(jsDest));
});
