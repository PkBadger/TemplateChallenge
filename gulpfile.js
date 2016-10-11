var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-ruby-sass'),
  browserSync = require('browser-sync').create();

// scripts task
// Uglifies
gulp.task('scripts',function(){
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))

});

// Html task
// Uglifies
gulp.task('html',function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('build/'))

});

// Styles task
// Ugilifies
gulp.task('styles',function(){
    sass('src/scss/**/*.scss',{
      style:'compressed'
    })
    .pipe(gulp.dest('build/css'));
    gulp.src('src/css/*.css')
    .pipe(gulp.dest('build/css'));

});

//Watch task
//Watches JS
gulp.task('watch',function(){
  browserSync.init({
        server: "./build"
    });
  gulp.watch('src/js/*.js',['scripts']);
  gulp.watch('src/scss/**/*.scss',['styles']);
  gulp.watch('src/*.html',['html']);
});

gulp.task('default',['scripts','styles','html','watch']);
