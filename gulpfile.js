var gulp = require("gulp");
var sass = require("gulp-sass");
var mincss = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var server = require("gulp-webserver");

gulp.task("sassTask", function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest("./src/css"))
})

gulp.task('minjs', function() {
    return gulp.src("./src/js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./src/mork"))
})

gulp.task('watch', function() {
    return gulp.src("./src/scss/index.scss", gulp.series("sassTask"))
})

gulp.task("dev", gulp.series("sassTask", "minjs", "watch"));