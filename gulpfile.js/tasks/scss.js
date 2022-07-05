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
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const replace = require('gulp-replace');
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const webpcss = require('gulp-webpcss');
const concat = require("gulp-concat");
const webphtmlnosvg = require('gulp-webp-html-nosvg');

//Обработка SCSS
const scss = () => {
  return src(path.scss.src, {
      sourcemaps: true
    })
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: "SCSS",
          message: error.message,
        })),
      })
    )
    .pipe(replace(/@img\//g, "../img/"))
    .pipe(concat("style.css"))
    // .pipe(webphtmlnosvg())
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(groupCssMediaQueries())
    
    .pipe(webpcss({
      noWebpClass: ".no-webp",
      webpClass: ".webp",
    }))
    .pipe(csso())
    .pipe(autoprefixer({
      grid: true,
      cascade: true
    }))
    .pipe(shorthand())
    .pipe(size({
      title: "До сжатия SCSS"
    }))
    .pipe(dest(path.scss.dest, {
      sourcemaps: true
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(size({
      title: "После сжатия SCSS"
    }))
    .pipe(dest(path.scss.dest, {
      sourcemaps: true
    }));
};
module.exports = scss;