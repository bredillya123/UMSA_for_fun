$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false,
    });


// for burger mobile version
$('.burger__button').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('burger__button--active');
    $('.mobnav__list').toggleClass('mobnav__list--active');
    $('.mobnav').toggleClass('mobnav--active');
    $('body').toggleClass('lock');
})

});



