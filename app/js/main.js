$(function () {

  $(".rate-star").rateYo({
    rating: 4,
    starWidth: "15px",
    ratedFill: "#ffc000",
    readOnly: true
  });

 

  $(".slider__inner").slick({
   arrows:false,
    
  });
   $(".followers__inner").slick({
     arrows: false,
     slidesToShow: 3,
    slidesToScroll: 3

   });
  var mixer = mixitup('.products__inner-box');
  $('.arrows-left').on('click', function () {
      $('.slider__inner').slick('slickPrev');
    });
    $('.arrows-right').on('click', function () {
      $('.slider__inner').slick('slickNext');
    });
  $('.followers__slider-left').on('click', function () {
      $('.followers__inner').slick('slickPrev');
    });
    $('.followers__slider-right').on('click', function () {
      $('.followers__inner').slick('slickNext');
    });
});