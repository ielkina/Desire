//Методы
const {
  src,
  dest
} = require("gulp");
//Конфигурации
const path = require("../config/path.js");
//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const replace = require('gulp-replace');
const cleanCss = require('gulp-clean-css');
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const webpcss = require("gulp-webpcss");
const webphtmlnosvg = require('gulp-webp-html-nosvg');
//Обработка CSS
const css = () => {
  return src(path.css.src, {
      sourcemaps: true
    })
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: "CSS",
          message: error.message,
        })),
      })
    )
    .pipe(concat("style.css"))
    .pipe(cssimport())
    .pipe(webpcss({
      noWebpClass: ".no-webp",
      webpClass: ".webp",
    }))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({
      title: "До сжатия CSS"
    }))
    .pipe(dest(path.css.dest, {
      sourcemaps: true
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(webphtmlnosvg())
    .pipe(replace(/@img\//g, "../img/"))
    .pipe(csso())
    .pipe(size({
      title: "После сжатия CSS"
    }))
    .pipe(dest(path.css.dest, {
      sourcemaps: true
    }));
};
module.exports = css;