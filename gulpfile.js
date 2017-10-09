var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('server',function () {
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('big.js'))
})