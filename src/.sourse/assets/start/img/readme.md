scss/
│── base/
│   ├── _variables.scss    // Переменные, включая шрифты (семейства, размеры, веса)
│   ├── _mixins.scss       // Миксины, упрощающие работу со шрифтами (например, адаптивные размеры)
│   ├── _extends.scss      // Общие стили, которые можно наследовать (например, текстовые стили)
│   ├── _global.scss       // Глобальные стили, применимые ко всему проекту (например, базовые настройки шрифта)
│
│── components/
│   ├── _buttons.scss      // Стили для кнопок, включая шрифты
│   ├── _headers.scss      // Заголовки с заданными шрифтами и размерами
│   ├── _text.scss         // Основные текстовые блоки с различными стилями
│
│── layouts/
│   ├── _grid.scss         // Сетка и структура страницы
│   ├── _main.scss         // Основной контейнер и базовый стиль текста
│
│── themes/
│   ├── _light.scss        // Светлая тема с настройками шрифтов
│   ├── _dark.scss         // Темная тема
│
│── main.scss              // Основной файл, который импортирует все остальные


//! подключение шрифтов с удаленых ресурсов
// @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
// @import url(https://fonts.googleapis.com/css?family=Poppins:regular,500,600&display=swap);
// @import url('https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap');
// @import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);

//! синтексиз шрифтов
// body {
//   font-family: 'Rubik Scribble', system-ui;
// }
// body {
//   font-family: 'Pacifico', handwriting;
// }

//цвет шрифта проекта
$text-color: #000;
$title-text-color: #000;
$subtitle-text-color: #000;

//переменные шрифтов проекта
$font-primary: 'Roboto', sans-serif;
$font-secondary: 'Playfair Display', serif;
$font-size-base: 16px;
$font-weight-bold: 700;
$font-weight-light: 300;
$regular: "Regular";
//размеры шрифтов проекта
//размеры шрифтов
$p-size: 18;
$p-min-size: 14;

$h1: 72;
$h1-min: 45;
$h2: 32;
$h2-min: 20;
$h3: 24;
$h3-min: 14;

// Подключение шрифтов проекта
@import "font/font-mixin";
@import "font/font-name";
@import "font/font-secur";
@import "font/font-style";
@import "font/font-type";

//НАСТРОЙКА ШРИФТОВ ПРОЕКТА
//название
$font-glob: $montserrat;
$font-glob-regular: $montserrat-regular;
$font-type: $sans-serif;
$font-h1: map-get($name, roboto);
// $font-h2: map-get($name, quicksand);
// $font-h3: map-get($name, dmsans);


//подключение локальных шрифтов
@include font($font-glob, #{$font-glob}-#{$regular}, 400);
@include font($font-glob, $font-glob-regular, 400);
// @include font-face(Rubik, Rubik-ExtraLight-Italic, 200);
// @include font-face(Rubik, Rubik-Light, 300);

body {
  font-family: $font-glob, $sans-serif; // простое подключение шрифта
  @include font-save($font-glob, $font-type); //подключение шрифта проекта со шрифтами безопасности
  // @include font-family($font-glob, $font-type); //подключение шрифта проекта с типом шрифта
  font-style: map-get($style, regular); //установка стиля шрифта по умолчанию

  // @include font($font-h1, $font-h1-medium, 500);
  // @include font($font-h2, $font-h2-regular, 400);
  // @include font($font-h3, $font-h3-regular, 400);
  // @include font($font-glob, #{$font-glob}-#{$regular}, 400);
  // @include font($font-glob, #{$font-glob}-#{$regularItalic}, 400);
}