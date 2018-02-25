var gulp = require("gulp");
var clean = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var autoprefixer =  require('gulp-autoprefixer');
var notify = require('gulp-notify');

gulp.task("styles", function() {
  gulp.src("./css.css")    
    .on("error", notify.onError())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(clean())
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});


gulp.task('default', ['styles'], function() {
  gulp.watch('./*.css', ['styles']);
  gulp.watch('./*.js', function() {browserSync.reload();});
  gulp.watch('./**/*.html', function() {browserSync.reload();});

	browserSync.init({
    server: {
        baseDir: "./"
    }
  });
});
