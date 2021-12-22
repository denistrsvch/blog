//Menu icon
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body')
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

//Header width
const headerWidth = document.querySelector('.header__container').getBoundingClientRect().width;
if (headerWidth) {
    const menuList = document.querySelector('.menu__list');
    let menuLinks = document.querySelectorAll('.menu__link');
    if (headerWidth > 842) {
        menuList.classList.toggle('_wide');
        if (menuLinks.length > 0) {
            for (let index = 0; index < menuLinks.length; index++) {
                const menuLink = menuLinks[index];
                menuLink.classList.toggle('_wide');
            }
        }
    }
}