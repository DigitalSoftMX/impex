$('.slider-cont').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover:false
});

$('.burguer').click(function () {
  $('.menu').toggleClass('active');
  $('.burguer').toggleClass('active');
});


