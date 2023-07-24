// * Menu
const body = document.body;
// const site = document.querySelector(".site-container");
const nav = document.querySelector(".header-nav");
const navBtn = document.querySelector(".header-nav-btn");
const navCloseBtn = document.querySelector(".header-close-btn");
const navLinks = document.querySelectorAll(".header-nav-link");

navBtn.addEventListener("click", () => {
    body.classList.toggle("no-scroll");
    nav.classList.toggle("activ-menu");
});

navCloseBtn.addEventListener("click", () => {
    body.classList.toggle("no-scroll");
    nav.classList.toggle("activ-menu");
})

navLinks.forEach((e) => {
    e.addEventListener("click", () => {
            body.classList.remove("no-scroll");
            nav.classList.remove("activ-menu");
    });
});

// * Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());