const {
  src,
  dest
} = require('gulp');
const zipgulp = require('gulp-zip');
//Конфигурации 
const path = require('../config/path.js');
const size = require("gulp-size");

//Удаление директории
const zip = () => {
  return src(`./${path.root}/**/*.*`, {})
    .pipe(zipgulp(`./${path.root}.zip`))
    .pipe(size({
      title: "Размер архива ZIP"
    }))
    .pipe(dest('./'));
}

module.exports = zip;