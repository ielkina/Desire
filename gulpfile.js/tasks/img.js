//Методы
const { src, dest } = require("gulp");
//Конфигурации
const path = require("../config/path.js");
//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const size = require("gulp-size");
//Обработка IMG
const img = () => {
  return src(path.img.src)
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: "IMG",
          message: error.message,
        })),
      })
    )
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(imagemin({verbose:true}))
    .pipe(size({
      title: "Размер файлов IMG"
    }))
    .pipe(dest(path.img.dest));
};
module.exports = img;
