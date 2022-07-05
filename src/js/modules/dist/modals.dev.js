"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modals = modals;

function modals() {
  var modalBtns = document.querySelectorAll('.header__btn');
  var modals = document.querySelectorAll('.rightside-menu__close');
  var body = document.body;

  function openModal(elem) {
    elem.classList.add('_active');
    body.classList.add('_locked');
  }

  function closeModal(e) {
    if (e.target.classList.contains('rightside-menu__close') || e.target.closest('.rightside-menu__close') || e.target.classList.contains('modal-bg')) {
      e.target.closest('.header__btn').classList.remove('_active');
      body.classList.remove('_locked');
    }
  }

  modalBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var data = e.target.dataset.modalOpen;
      modals.forEach(function (modal) {
        if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest("._modal-open").dataset.modalOpen) {
          openModal(modal);
        }
      });
    });
  });
  modals.forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      return closeModal(e);
    });
  });
  window.addEventListener('keydown', function (e) {
    modals.forEach(function (modal) {
      if (e.key === "Escape" && modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_locked');
      }
    });
  });
}