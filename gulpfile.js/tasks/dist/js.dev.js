"use strict";

//Методы
var _require = require("gulp"),
    src = _require.src,
    dest = _require.dest; //Конфигурации


var path = require("../config/path.js"); //Плагины


var plumber = require("gulp-plumber");

var notify = require("gulp-notify");

var babel = require("gulp-babel");

var webpack = require("webpack-stream");

var size = require('gulp-size'); //Обработка JavaScript


var js = function js() {
  return src(path.js.src, {
    sourcemaps: true
  }).pipe(plumber({
    errorHandler: notify.onError(function (error) {
      return {
        title: "JS",
        message: error.message
      };
    })
  })).pipe(babel()).pipe(webpack({
    mode: "development" //"production" 

  })).pipe(size({
    title: "Размер файлов JS"
  })).pipe(dest(path.js.dest, {
    sourcemaps: true
  }));
};

module.exports = js;