  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // asNavFor: '.slider-for',
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false
  });

$('.slide-next').click(function(e){
  //e.preventDefault(); 
  $('.slider    ').slick('slickNext');
} );  

$('.sliderHomepage').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // asNavFor: '.slider-for',
  // dots: true,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false
});


$('.slide-next').click(function(e){
//e.preventDefault(); 
$('.slider    ').slick('slickNext');
} );  

