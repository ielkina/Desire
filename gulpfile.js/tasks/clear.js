//Плагины
const del = require("del");
//Путь к папке которую надо удалить
const path = require('../config/path.js');
//Удаление директории
const clear = () => {
  return del(path.root);
};
module.exports = clear;