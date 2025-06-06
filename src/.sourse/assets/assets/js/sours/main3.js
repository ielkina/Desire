function showMyTemplate() {
  const myTemplate = document.querySelector('template');
  const templateClone = myTemplate.content.cloneNode(true);
  document.body.appendChild(templateClone);

}