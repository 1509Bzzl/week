var gulp = require('gulp');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');

gulp.task('server',function () {
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('big.js'))
})
gulp.task('connect',function(){
    gulp.src('dist/main.js')
    .pipe(connect.connect({
        port:3030,
        livereload:true
    }))
    
})
