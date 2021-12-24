const likes = document.querySelectorAll('.like');

if (likes.length > 0) {
    for (let index = 0; index < likes.length; index++) {
        const like = likes[index];
        like.addEventListener("click", function (e){
            like.classList.toggle('_active');
        })
    }
}



