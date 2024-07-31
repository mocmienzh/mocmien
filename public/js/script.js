
$(document).ready(function(){
    AOS.init({
        once: false,
        duration: 1000,
    });

    $(".owl-carousel-review").owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
    });
});
const mobileBar = document.querySelector('.home-menu-bar');
const headerNav = document.querySelector('#home-header nav');
mobileBar.addEventListener('click', function(event) {
    if (headerNav.classList.contains('header-nav-hidden')) {
        headerNav.classList.remove('header-nav-hidden');
    }
    else {
        headerNav.classList.add('header-nav-hidden');
    }
});