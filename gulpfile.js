import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';

// Task for minifying JavaScript
gulp.task("minify-js", function () {
  return gulp
    .src("./src/dist/js/*.js") // Source JS files
    .pipe(terser()) // Minify
    .pipe(gulp.dest("./src/dist/js")); // Output to destination
});

// Task for minifying CSS
gulp.task("minify-css", function () {
  return gulp
    .src("./src/dist/css/*.css") // Source CSS files
    .pipe(cleanCSS({ compatibility: "ie8" })) // Minify
    .pipe(gulp.dest("./src/dist/css")); // Output to destination
});

// Default task to run both
gulp.task("default", gulp.series("minify-js", "minify-css"));
