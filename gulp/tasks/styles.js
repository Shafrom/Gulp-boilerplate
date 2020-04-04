const gulp = require('gulp')
const plumber = require('gulp-plumber')
const stylus = require('gulp-stylus')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')
const gulpStylelint = require('gulp-stylelint')

module.exports = function styles() {
  return gulp.src('src/styles/*.styl')
    .pipe(plumber())
    .pipe(gulpStylelint({
     failAfterError: false,
     reporters: [
        {
          formatter: 'string',
         console: true
        }
      ]
    }))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(shorthand())
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
}
