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




let posts = [];

const place = document.querySelector('.posts-wall__elements');

const addPostButton = document.getElementById('add');
const postTitle = document.getElementById('postTitle');
const postDescription = document.getElementById('postDescription');


function Post (title, img, description){
    this.title = postTitle.value;
    this.img = img;
    this.description = postDescription.value;
}

function createPost (title, description) {

    const newPost = document.createElement('div');

    newPost.setAttribute('class', 'posts-wall post-template');
    newPost.innerHTML = `<div class="post-template__title">
            <div class="post-template__title-body">
                <div class="post-template__title-text">${title}</div>
            </div>
        </div>
        <div class="post-template__description">
            <div class="description__likes-area">
                <div class="description__likes-icon">
                    <svg class="like" xmlns="http://www.w3.org/2000/svg" overflow="visible"
                         preserveAspectRatio="none" viewBox="0 0 24 24" width="30" height="30">
                        <g>
                            <path id="heart"
                                  d="M12,20c0.17,0,0.34-0.07,0.46-0.19l6.49-6.25c1.39-1.18,2.25-2.87,2.38-4.69C21.4,7.55,20.92,6.26,20,5.3  C19.01,4.4,17.69,3.93,16.35,4c-0.46,0-0.92,0.08-1.35,0.23c-0.44,0.14-0.86,0.35-1.25,0.6c-0.39,0.25-0.72,0.49-1,0.71  C12.47,5.77,12.21,6,11.96,6.25C11.71,6,11.45,5.77,11.17,5.54c-0.28-0.22-0.61-0.46-1-0.71C9.81,4.59,9.41,4.38,9,4.23  C8.57,4.08,8.11,4.01,7.65,4C6.31,3.93,4.99,4.4,4,5.3C3.08,6.26,2.6,7.56,2.67,8.88c0,0.49,0.08,0.98,0.24,1.44  c0.14,0.44,0.33,0.86,0.56,1.26c0.21,0.35,0.45,0.68,0.71,1c0.27,0.33,0.46,0.55,0.58,0.68c0.09,0.1,0.19,0.19,0.29,0.27l6.5,6.27  C11.67,19.93,11.83,20,12,20L12,20z"/>
                        </g>
                    </svg>
                </div>
                <div class="description__likes">likes</div>
            </div>
            <div class="description__text-area">
                <div class="description__description">${description}</div>
                <a class="description__more-button" href="#">...more</a>
            </div>
        </div>`

    place.append(newPost);

    console.log(title, description)
}

addPostButton.onclick = function () {
    let title = postTitle?.value
    let description = postDescription?.value

    createPost(title, description);
    modalClose(modalCloseIcon.closest('.modal__container'));

}





