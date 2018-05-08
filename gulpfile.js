var gulp = require('gulp');
var npmDist = require('gulp-npm-dist');
 
// Copy dependencies to ./public/vendor/
gulp.task('copy', function() {
  gulp.src(npmDist(), {base:'./node_modules/@bower_components'})
    .pipe(gulp.dest('./public/vendor'));
});