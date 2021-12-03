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



$('.slider-nosotros .item').each(function() {
  var slider = $(this);
  slider.slick({
    arrows: false,
    dots: false,
    accessibility: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow:4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  var sLightbox = $(this);
  sLightbox.slickLightbox({
    src: 'src',
    itemSelector: '.slide img',
    caption:function(element, info) {
    var span=$(element).parent().find(".desc");
    return span.html(); }
  });
});

$('.burguer').click(function () {
  $('.menu').toggleClass('active');
  $('.burguer').toggleClass('active');
});

$('.productos').click(function () {
  $('.categories').toggleClass('hide');
});

$('.tarjas').hover(function () {
  $('.tarjas-list').toggleClass('hide');
});

