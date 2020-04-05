const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')

module.exports = function pug2html(cb) {
  return gulp.src('src/pages/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('build'))
}
