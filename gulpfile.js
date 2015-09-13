var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src('test/mocha/fizzbuzz-test-mocha.js', {read: false})
    .pipe(mocha());
});
