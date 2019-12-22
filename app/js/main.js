$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    ratedFill: "#ffc000",
    readOnly: true
  });



  $(".slider__inner").slick({
    arrows: false,

  });

  $(".followers__inner").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3

  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    prefix: "$"
  });

  

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


  $('.filter__list').on('click', function () {
     $('.products__item').addClass('list');
     $('.filter__list').addClass('active');
    $('.filter__grid').removeClass('active');
  });
  $('.filter__grid').on('click', function () {
    $('.products__item').removeClass('list');
    $('.filter__grid').addClass('active');
    $('.filter__list').removeClass('active');
  });
var mixer = mixitup('.products__inner-box');
});
