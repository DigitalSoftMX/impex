$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    fade: false,
    arrows: false,
    dots:true,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover:false
});

$('.burguer').click(function () {
  $('.menu').toggleClass('active');
  $('.burguer').toggleClass('active');
});


