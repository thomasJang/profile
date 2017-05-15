var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('concat', function(){

});

gulp.task('sass', function(){
  gulp.src('assets/scss/app.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('assets'));
});

gulp.task('default', ['sass'], function(){
    gulp.watch('assets/scss//**/*.scss', ['sass']);
});
