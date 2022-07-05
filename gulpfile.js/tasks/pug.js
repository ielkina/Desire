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
const size = require("gulp-size");
const pugs = require('gulp-pug');
const replace = require('gulp-replace');
const webpHtml = require('gulp-webp-html');

//Обработка PUG
const pug = () => {
  return src(path.pug.src)
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: "PUG",
          message: error.message,
        })),
      })
    )
    .pipe(pugs({
      pretty: true, //для сжатия файла закоментировать
      data: {
        news: require('../data/news.json')
      }
    }))
    .pipe(size({
      title: "До сжатия PUG"
    }))
    .pipe(webpHtml())
    .pipe(replace(/@img\//g, "img/"))
    .pipe(size({
      title: "После сжатия PUG"
    }))
    .pipe(dest(path.pug.dest, {
      sourcemaps: true
    }));
}
module.exports = pug;