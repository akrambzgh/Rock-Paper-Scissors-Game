var gulp = require("gulp");
var postcss = require("gulp-postcss");
var sass = require("gulp-sass")(require("sass"));
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
gulp.task("css", function () {
  var processors = [autoprefixer, cssnano];
  return gulp
    .src("./app/src/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest("./app/public/dist"));
});
