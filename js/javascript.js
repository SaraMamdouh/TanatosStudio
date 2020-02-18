$(function(){
  $('.responsive').slick({
    dots: true,
    autoplay:true,
    arrows:false,
    infinite: false,
    speed: 300,
    dotsClass:'slick-dots',
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    
  // nicescroll
  $("body").niceScroll({
    cursorcolor:"gray",
    cursorwidth:"16px"
  });
    //scroll down
    $(".icon").click(function(){
      $("html,body").animate({
        scrollTop:$("#"+$(this).data("scroll")).offset().top
      });
         });

//click on menu bar
$(".navbar-right>a,.navbar-right>i").click(function(){
  $(".hidden-navbar").fadeIn();
    });
    $(".hidden-navbar>ul>button").click(function(){
      $(".hidden-navbar").fadeOut();
    });

$(".show-button").click(function(){
$(".works .hidden-item").fadeIn();
}); 
  //carousel
  $('.carousel').carousel();


});


