'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function(){
  gulp.src('HW4/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('HW4/css'));
});
 
gulp.task('sass:watch', function(){
  gulp.watch('HW4/sass/*.scss', ['sass']);
});
