
$(document).ready(function() {

 $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 700,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1
 });

 });


//$(function(){

  //var numSlides = $('.slide').size(),
    //  slideWidth = 100 / numSlides,
      //frameWidth = $('.frame').width();
      //numClicks = 0;

//  function moveIt() {
    // calculate how far to animate
//    var slideDistance = frameWidth * numClicks;
    //animate tray
//    $('.tray').animate({right: slideDistance}, 'slow');
//  }

//  $('.slide').css({'width': slideWidth+'%'});

//  $('.tray').width(frameWidth * numSlides);

//  $('.prev, .next').hide();

  //user clicks next
//  $('.next').click(function () {
//    if (numClicks < numSlides - 1) {
      // increment numClicks
//    } else {
//      numClicks = 0;
//    }
//    moveIt();
//  });

  //user clicks prev
//  $('.prev').click(function () {
//    if (numClicks > 0) {
      // decrement numClicks
//      numClicks -= 1;
//    } else {
//      numClicks = numSlides - 1;
//    }
//    moveIt();
//  });

//  $('.frame').hover(function () {
//    $('.prev, .next').show();
//  }, function() {
//    $('.prev, .next').hide();
 // });

//});