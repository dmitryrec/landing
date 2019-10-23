let scrolled;
let timer;

function scrollToTop() {
    if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 200;
        timer = setTimeout(scrollToTop, 40);
    }
    else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    }
};

document.querySelector('#up').addEventListener('click', function () {
    scrolled = window.pageYOffset;
    scrollToTop();
})  