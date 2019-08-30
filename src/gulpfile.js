var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

livereload({ start: true })

gulp.task('sass', function(){
  return gulp.src('./dev/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dev/css'))
    .pipe(livereload());
});

gulp.task('html', function(){
  return gulp.src('./dev/index.html')
    .pipe(livereload());
})

gulp.task('connect', function() {
  connect.server({
    root: './dev',
    livereload: true,
  });
});

gulp.task('watch', function(){
  livereload.listen();

  gulp.watch('./dev/scss/style.scss', ['sass']);
  gulp.watch('./dev/index.html', ['html']);

});

gulp.task('default', ['connect', 'sass','html', 'watch']);
