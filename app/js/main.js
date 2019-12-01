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
  var mixer = mixitup('.products__inner-box');
  $('.arrows-left').on('click', function () {
      $('.slider__inner').slick('slickPrev');
    });
    $('.arrows-right').on('click', function () {
      $('.slider__inner').slick('slickNext');
    });
});