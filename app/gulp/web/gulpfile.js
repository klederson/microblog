var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var strip = require('gulp-strip-comments');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');

var sourceBower = 'bower/';
var sourceDir = 'app/gulp/web/';
var sourceJsDir = sourceDir + 'js/';

gulp.task('css-external', function(){
    return gulp.src([
        sourceBower + 'foundation/css/foundation.min.css',
        sourceBower + 'fontawesome/css/font-awesome.min.css',
        sourceBower + 'sweetalert/dist/sweetalert.css'
    ])
        .pipe(plumber())
        .pipe(concat('external.css'))
        .pipe(gulp.dest('web/css'))
    ;
});

gulp.task('css', function(){
    return gulp.src([
        sourceDir + 'scss/style.scss'
    ])
        .pipe(plumber())
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('web/css'))
    ;
});

gulp.task('copy-fonts', function(){
    gulp.src([
        sourceBower + 'fontawesome/fonts/*.*'
    ], [{ base: 'bower/' }])
        .pipe(gulp.dest('web/fonts'))
    ;
});

gulp.task('copy-files', ['copy-fonts'], function(){
    //return gulp.src(sourceScssDir + 'responsive/**/*.css')
    //    .pipe(gulp.dest('web/css/responsive'));
});

gulp.task('js-external', function(){
    return gulp.src([
        sourceBower + 'jquery/dist/jquery.min.js',
        sourceBower + 'foundation/js/foundation.min.js',
        sourceBower + 'sweetalert/dist/sweetalert.min.js'
    ])
        .pipe(strip())
        .pipe(uglify())
        .pipe(concat('external.js'))
        .pipe(gulp.dest('web/js/'))
    ;
});

gulp.task('js', ['js-external'], function(){
    return gulp.src([
        sourceJsDir + 'app.js'
    ])
        .pipe(strip())
        .pipe(browserify({
            insertGlobals: true,
            debug: false
        }))
        //.pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('web/js/'))
    ;
});

gulp.task('watch', function(){
    gulp.watch([
        sourceDir + 'layout/css/*.*/*.css',
        sourceDir + 'scss/**/*.scss'
    ], ['css'])
});

gulp.task('default', ['css-external', 'css', 'copy-files', 'js']);
