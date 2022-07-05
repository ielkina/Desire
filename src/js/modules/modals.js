export function modals() {
  const modalBtns = document.querySelectorAll('.header__btn');
  const modals = document.querySelectorAll('.rightside-menu__close');
  const body = document.body;

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

  modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let data = e.target.dataset.modalOpen;
      modals.forEach(modal => {
        if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest("._modal-open").dataset.modalOpen) {
          openModal(modal);
        }
      });
    });
  });
  modals.forEach(modal => {
    modal.addEventListener('click', e => closeModal(e));
  });

  window.addEventListener('keydown', e => {
    modals.forEach(modal => {
      if (e.key === "Escape" && modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_locked');
      }
    });
  });
}