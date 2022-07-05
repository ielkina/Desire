"use strict";

//Методы
var _require = require("gulp"),
    src = _require.src,
    dest = _require.dest; //Конфигурации


var path = require("../config/path.js"); //Плагины


var plumber = require("gulp-plumber");

var notify = require("gulp-notify");

var size = require("gulp-size");

var pugs = require('gulp-pug');

var replace = require('gulp-replace');

var webpHtml = require('gulp-webp-html'); //Обработка PUG


var pug = function pug() {
  return src(path.pug.src).pipe(plumber({
    errorHandler: notify.onError(function (error) {
      return {
        title: "PUG",
        message: error.message
      };
    })
  })).pipe(pugs({
    pretty: true,
    //для сжатия файла закоментировать
    data: {
      news: require('../data/news.json')
    }
  })).pipe(size({
    title: "До сжатия PUG"
  })).pipe(webpHtml()).pipe(replace(/@img\//g, "img/")).pipe(size({
    title: "После сжатия PUG"
  })).pipe(dest(path.pug.dest, {
    sourcemaps: true
  }));
};

module.exports = pug;