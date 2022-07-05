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
const fileInclude = require('gulp-file-include');
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const replace = require('gulp-replace');
const webpHtml = require('gulp-webp-html');

//Обработка для HTML
const html = () => {
  return src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(replace(/@img\//g, "img/"))
    .pipe(size({
      title: "До сжатия HTML"
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(size({
      title: "После сжатия HTML"
    }))
    .pipe(dest(path.html.dest));
};

module.exports = html;