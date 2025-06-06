// Проверка поддержки webp, добавление класса webp или  no-webp для html
export function isWebp() {
  function testWebp(callback) {
    // Проверка поддержки webp
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
    // let className = support === true ? ".webp" : ".no-webp";
    // document.documentElement.classList.add(className);
  });
}
