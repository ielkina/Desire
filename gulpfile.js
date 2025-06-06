const srcDist = 'src/'; // папка разработки
const prodDist = 'Desire/'; // папка сборки

//gulp
const { src, dest, series, parallel, watch } = require('gulp');
//style
const sass = require('sass');
const gulpSass = require('gulp-sass')(sass);
// const gulpSass = require('gulp-dart-sass');
// const gulpSass = require("gulp-sass")(require("sass"));
// const sassGlob = require("gulp-sass-glob");
const cssbeautify = require('gulp-cssbeautify');
const csso = require('gulp-csso');
const webpcss = require('gulp-webpcss');
//html
const fileInclude = require('gulp-file-include');
const webphtml = require('gulp-webp-html-nosvg-local');
const removeHtmlComments = require('gulp-remove-html-comments');
const htmlmin = require('gulp-htmlmin');
const prettify = require('gulp-prettify');
//script
const webpack = require('webpack-stream');
// const rigger = require('gulp-rigger');
// const uglify = require('gulp-uglify');
// const concat = require('gulp-concat');
// const webpack = require('webpack-stream');
// const newer = require('gulp-newer');
//svg
const svgSprite = require('gulp-svgstore');
//img
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');
//font
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const merge = require('merge-stream');
//функционал
const del = require('del');
const rename = require('gulp-rename');
const size = require('gulp-size').default;
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const autoPrefixer = require('gulp-autoprefixer');

//пути
const path = {
  build: {
    html: prodDist,
    css: prodDist + 'css/',
    img: prodDist + 'img/',
    font: prodDist + 'fonts/',
    js: prodDist + 'js/',
  },
  src: {
    html: srcDist + '*.html',
    css: srcDist + 'scss/*.{scss,sass,css}',
    img: srcDist + 'img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
    svg: srcDist + 'img/icon/*.svg',
    font: srcDist + 'fonts/*.{eot,woff,woff2,ttf,svg}',
    js: srcDist + 'js/**/*.js',
  },
  watch: {
    html: srcDist + '**/*.html',
    css: srcDist + 'scss/**/*.{scss,sass,css}',
    img: srcDist + 'img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
    svg: srcDist + 'img/icon/*.svg',
    font: srcDist + 'fonts/*.{eot,woff,woff2,ttf,svg}',
    js: srcDist + 'js/**/*.js',
  },
  clean: './' + prodDist,
};
//html
function html() {
  return (
    src([
      srcDist + '**/*.html',
      '!' + srcDist + 'path/**',
      '!' + srcDist + 'pug/**',
      '!' + srcDist + 'html/**',
    ])
      .pipe(sourcemaps.init())
      // продакшн синтаксис
      .pipe(fileInclude())
      .pipe(size({ title: 'html ⬇' }))
      .pipe(webphtml(true))
      .pipe(removeHtmlComments())
      .pipe(prettify({ indent_size: 2 }))
      .pipe(dest(prodDist))
      .pipe(size({ title: 'html ✔' }))
      .pipe(browserSync.reload({ stream: true }))
      // сжатый код
      .pipe(fileInclude())
      .pipe(size({ title: 'html min ⬇' }))
      .pipe(webphtml(true))
      .pipe(removeHtmlComments())
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(htmlmin())
      .pipe(size({ title: 'html min ✔' }))
      .pipe(dest(prodDist))
      .pipe(browserSync.reload({ stream: true }))
  );
}
//style
function style() {
  return (
    src(srcDist + 'scss/**/*.*')
      .pipe(sourcemaps.init())
      .pipe(size({ title: 'style  ⬇' }))
      .pipe(
        gulpSass({ outputStyle: 'expanded' }).on('error', gulpSass.logError)
      )
      //.pipe(sassGlob())
      .pipe(
        webpcss({
          webpClass: '.webp',
          nowebpClass: '.no-webp',
        })
      )
      .pipe(
        autoPrefixer({ grid: true, overrideBrowserslist: ['last 3 versions'] })
      )
      .pipe(csso())
      .pipe(cssbeautify({ indent: '  ' }))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(sourcemaps.write('.'))
      .pipe(size({ title: 'style ✔' }))
      .pipe(dest(prodDist + 'css/'))
      .pipe(browserSync.reload({ stream: true }))
  );
}
//script
function script() {
  return (
    src(srcDist + 'js/**/*.*')
      .pipe(size({ title: 'script ⬇' }))
      .pipe(webpack(require('./webpack.config')))
      // .pipe(rigger())
      // .pipe(dest(path.build.js))
      // .pipe(uglify())
      // .pipe(rename({ extname: '.min.js' }))
      // .pipe(dest(path.build.js))
      // .pipe(browserSync.reload({ stream: true }));
      // .pipe(concat('main.min.js'))
      // .pipe(uglify())
      .pipe(size({ title: 'script ✔' }))
      .pipe(dest(prodDist + 'js/'))
      .pipe(browserSync.stream())
  );
}
//img
function image() {
  return src(srcDist + 'img/**/*')
    .pipe(size({ title: 'images ⬇' }))
    .pipe(imagemin())
    .pipe(size({ title: 'images ✔' }))
    .pipe(dest(prodDist + 'img/'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(src(srcDist + 'img/**/*'))
    .pipe(size({ title: 'image webp ⬇' }))
    .pipe(imagewebp())
    .pipe(size({ title: 'image webp ✔' }))
    .pipe(dest(prodDist + 'img/'))
    .pipe(browserSync.reload({ stream: true }));
}
//svg
function spriteSvg() {
  return src(srcDist + 'img/**/*.svg')
    .pipe(size({ title: 'sprite ⬇' }))
    .pipe(svgSprite())
    .pipe(rename('sprite.svg'))
    .pipe(size({ title: 'sprite ✔' }))
    .pipe(dest(prodDist + 'img/'))
    .pipe(browserSync.reload({ stream: true }));
}
// font
function font() {
  // Конвертация ttf в woff2
  src(srcDist + 'font/**/*.*')
    .pipe(size({ title: 'font ttf ⬇' }))
    .pipe(ttf2woff2())
    .pipe(dest(prodDist + 'font/'))
    // .pipe(dest(srcDist + "font/"))
    .pipe(browserSync.reload({ stream: true }));
  // Конвертация ttf в woff
  return (
    src(srcDist + 'font/**/*.*')
      .pipe(fonter({ formats: ['woff'] }))
      .pipe(size({ title: 'font woff ✔' }))
      .pipe(dest(prodDist + 'font/'))
      // .pipe(dest(srcDist + "font/"))
      .pipe(browserSync.reload({ stream: true }))
  );
}
//очистка продакшн папки
function clear() {
  return del([
    prodDist + '**',
    '!' + prodDist + '.git',
    '!' + prodDist + '.git/**',
    '!' + prodDist + '.gitignore',
    '!' + prodDist + 'README.md',
  ]);
}
//(отслеживание изменений)
function watcher() {
  watch('src/**/*.html', html);
  watch('src/css/**/*.css', style);
  watch('src/scss/**/*.scss', style);
  watch('src/js/main.js', script);
  watch('src/img/**/*.svg', spriteSvg);
  watch('src/img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}', image);
  watch('src/font/**/*.{eot,woff,woff2,ttf,svg}', font);
}
function browsersync(done) {
  browserSync.init({
    server: {
      baseDir: prodDist,
    },
    notify: false,
    open: true,
  });
  done();
}
// Экспорт задач
exports.html = html;
exports.style = style;
exports.script = script;
exports.image = image;
exports.spriteSvg = spriteSvg;
exports.font = font;
exports.browsersync = browsersync;

exports.default = series(
  clear,
  parallel(image, spriteSvg, font, html, style, script),
  browsersync,
  watcher
);
