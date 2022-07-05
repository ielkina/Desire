"use strict";

//Методы
var _require = require("gulp"),
    src = _require.src,
    dest = _require.dest; //Конфигурации


var path = require("../config/path.js"); //Плагины


var plumber = require("gulp-plumber");

var notify = require("gulp-notify");

var autoprefixer = require("gulp-autoprefixer");

var csso = require("gulp-csso");

var rename = require("gulp-rename");

var replace = require('gulp-replace');

var size = require("gulp-size");

var shorthand = require("gulp-shorthand");

var groupCssMediaQueries = require("gulp-group-css-media-queries");

var sass = require("gulp-sass")(require("sass"));

var sassGlob = require("gulp-sass-glob");

var webpcss = require('gulp-webpcss');

var concat = require("gulp-concat");

var webphtmlnosvg = require('gulp-webp-html-nosvg'); //Обработка SCSS


var scss = function scss() {
  return src(path.scss.src, {
    sourcemaps: true
  }).pipe(plumber({
    errorHandler: notify.onError(function (error) {
      return {
        title: "SCSS",
        message: error.message
      };
    })
  })).pipe(replace(/@img\//g, "../img/")).pipe(concat("style.css")) // .pipe(webphtmlnosvg())
  .pipe(sass({
    outputStyle: "expanded"
  })).pipe(groupCssMediaQueries()).pipe(webpcss({
    noWebpClass: ".no-webp",
    webpClass: ".webp"
  })).pipe(csso()).pipe(autoprefixer({
    grid: true,
    cascade: true
  })).pipe(shorthand()).pipe(size({
    title: "До сжатия SCSS"
  })).pipe(dest(path.scss.dest, {
    sourcemaps: true
  })).pipe(rename({
    suffix: ".min"
  })).pipe(size({
    title: "После сжатия SCSS"
  })).pipe(dest(path.scss.dest, {
    sourcemaps: true
  }));
};

module.exports = scss;