const {
  src,
  dest
} = require("gulp");
const newer = require('gulp-newer');
const size = require("gulp-size");
//Конфигурации 
const paths = require('../config/path.js');

const files = () => {
  return src(paths.files.src)
 
  .pipe(size({
    title: "Размер FILES"
  }))
  .pipe(newer(paths.files.dest))
  .pipe(dest(paths.files.dest));
}
module.exports = files;