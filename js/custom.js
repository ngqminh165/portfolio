// $(document).ready(function() {

    $('#footer').load('footer.html');


    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: false,
        autoplay: true,
        touchDrag: false,
        autoplayTimeout: 3500,
    });


    $('.menu').click(function() {
        $('header').toggleClass('header_active');
    });




// })

//==================Scroll Detecter==================//
// (function() {
    // $(window).on("scroll", function() {
    //     if ($(window).scrollTop() > 228) {
    //         $("header").addClass("active");
    //     } else {
    //         $("header").removeClass("active");
    //     }
    //     if ($(window).scrollTop() > 10) {
    //         $(".bot_nav").css("bottom", "-64px")
    //     } else {
    //         $(".bot_nav").css("bottom", "")
    //     }
    // });
// });

//==================Slider==================//



//==================Menu==================//

// $(document).ready(function() {

// });


//==================Call Time==================//
