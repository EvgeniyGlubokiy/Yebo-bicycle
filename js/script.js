function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

//burger menu====================================


$('.icon-menu').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

//========================================



//slider===============
if ($(".slider__body").length > 0) {
    $(".slider__body").slick({
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            setings: {}
        }]
    });
}

//=============================================