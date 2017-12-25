/**
 * Created by Nan on 2017/12/4.
 */

var fs = require("fs");
var path = require("path");

var gulp = require("gulp");
var concat = require("gulp-concat");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");


gulp.task("sass", function() {
    gulp.src("./Content/css/*.scss")
        .pipe(concat("main.css"))
        .pipe(sass())
        .pipe(gulp.dest("./Content/css/"));

});
gulp.task("server", function() {
    gulp.src("./")
        .pipe(webserver({
            host: "localhost",
            port: 8080,
            open: true,
            fallback: "index.html",
            livereload: true

        }));
});

gulp.task("default", function() {
    gulp.start("server");
});

gulp.task("watchSass", function() {
    gulp.watch("./Content/css/*.scss", ["sass"]);
});