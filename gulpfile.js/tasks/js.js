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
const babel = require("gulp-babel");
const webpack = require("webpack-stream");
const size = require('gulp-size');
//Обработка JavaScript
const js = () => {
  return (
    src(path.js.src, {
      sourcemaps: true
    })
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: "JS",
          message: error.message,
        })),
      })
    )
    .pipe(babel())
    .pipe(webpack({
      mode: "production"
      // "development"
      
    }))
    .pipe(size({
      title: "Размер файлов JS"
    }))
    .pipe(dest(path.js.dest, {
      sourcemaps: true
    }))
  );
};
module.exports = js;