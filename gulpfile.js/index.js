const {
  watch,
  series,
  parallel
} = require("gulp");
const browserSync = require("browser-sync").create();
// //Конфигурации
const path = require("./config/path.js");
//Задачи
const clear = require("./tasks/clear.js");
const html = require("./tasks/html.js");
const pug = require("./tasks/pug.js");
const scss = require("./tasks/scss.js");
const css = require("./tasks/css.js");
const js = require("./tasks/js.js");
const img = require("./tasks/img.js");
const font = require("./tasks/font.js");
const files = require("./tasks/files.js");
const zip = require("./tasks/zip.js");
//Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};
//Наблюдатель
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.pug.watch, pug).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.css.watch, css).on("all", browserSync.reload);
  watch(path.js.watch, js).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
  watch(path.font.watch, font).on("all", browserSync.reload);
  watch(path.files.watch, files).on("all", browserSync.reload);
}
const build = series(
  clear,
  parallel(
    // html,
    // css,
    font, scss, img, js, files, pug)
);
const dev = series(
  build,
  parallel(watcher, server)
)
//задачи
exports.clear = clear;
exports.watch = watcher;
exports.pug = pug;
// exports.html = html;
exports.scss = scss;
// exports.css = css;
exports.js = js;
exports.img = img;
exports.font = font;
exports.files = files;
exports.zip = zip;
//сборка
exports.dev = dev;
exports.build = build;