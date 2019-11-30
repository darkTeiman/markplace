$(function () {

  $(".rate-star").rateYo({
    rating: 4,
    starWidth: "17px",
    ratedFill: "#ffc000",
    readOnly: true
  });

 
  $(".slider__inner").slick({
   arrows:false,
    


  });
  $('.arrows-left').on('click', function () {
      $('.slider__inner').slick('slickPrev');
    });
    $('.arrows-right').on('click', function () {
      $('.slider__inner').slick('slickNext');
    });
});