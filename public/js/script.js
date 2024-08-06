if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
}


$(document).ready(function(){
    AOS.init({
        once: false,
        duration: 1000,
    });

    $('.owl-carousel-review').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
    });

    $('.home-menu-bar').on('click', function() {
        if ($('#main-header nav').hasClass('header-nav-hidden')) {
            $('#main-header nav').removeClass('header-nav-hidden');
        } else {
            $('#main-header nav').addClass('header-nav-hidden');
        }
    });
});