var gulp = require("gulp");
var sass = require("gulp-sass");
var clean = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var autoprefixer =  require('gulp-autoprefixer');
var del = require('del');
var notify = require('gulp-notify');

gulp.task("styles", function() {
  gulp.src("sass/style.scss")
    .pipe(sass())
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
  gulp.watch('./sass/**/*.scss', ['styles']);
  gulp.watch('./**/*.html', function() {browserSync.reload();});

	browserSync.init({
    server: {
        baseDir: "./"
    }
  });
});
