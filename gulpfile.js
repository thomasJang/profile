var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");


function errorAlert(error) {
    notify.onError({title: "Gulp Error", message: "Check your terminal", sound: "Purr"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
}

gulp.task('sass', function(){
  gulp.src('assets/scss/app.scss')
      .pipe(plumber({errorHandler: errorAlert}))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('assets'));
});

gulp.task('default', ['sass'], function(){
    gulp.watch('assets/scss//**/*.scss', ['sass']);
});
