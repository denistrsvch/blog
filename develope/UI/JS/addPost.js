const modalLink = document.querySelector('.modal-link');
modalLink.addEventListener("click", function (e) {
    document.body.classList.add('_lock');
    const modalName = modalLink.getAttribute('href').replace('#', '');
    const currentModal = document.getElementById(modalName);
    modalOpen(currentModal);
    e.preventDefault();
});

const modalCloseIcon = document.querySelector('.page-box__cancel');
modalCloseIcon.addEventListener("click", function (e) {
    modalClose(modalCloseIcon.closest('.modal__container'));
    e.preventDefault();
})

function modalOpen(currentModal) {
    if (currentModal) {
        const modalActive = document.querySelector('.modal__container.open');
        if (modalActive) {
            modalClose(modalActive);
        }
        currentModal.classList.add('open');
        currentModal.addEventListener("click", function (e) {
            if (!e.target.closest('.page-box')) {
                modalClose(e.target.closest('.modal__container'))
            }
        });
    }
}

function modalClose(modalActive) {
    modalActive.classList.remove('open');
    document.body.classList.remove('_lock');
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const modalActive = document.querySelector('.modal__container.open');
        modalClose(modalActive);
    }
});
