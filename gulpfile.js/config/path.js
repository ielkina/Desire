const pathSrc = "./src"; //Директория с исходными файлами
const pathDest = "./public"; //Папка с проектом

module.exports = {
  root: pathDest,
  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest,
  },
  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest,
  },
  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css",
  },
  scss: {
    src: pathSrc + "/sass/*.{sass,scss}",
    watch: pathSrc + "/sass/**/*.{sass,scss}",
    dest: pathDest + "/css",
  },
  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js",
  },
  img: {
    src: pathSrc + "/img/*.{jpg,png,svg,jpeg,gif,ico,webp}",
    watch: pathSrc + "/img/**/*.{jpg,png,svg,jpeg,gif,ico,webp}",
    dest: pathDest + "/img",
  },
  font: {
    src: pathSrc + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/font",
  },
  files: {
    src: pathSrc + "/files/*.*",
    watch: pathSrc + "/files/**/*.*",
    dest: pathDest + "/files",
  }
};