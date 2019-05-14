$(function(){

    nav = $('.navbar');
    $(document).on('scroll', function(){
        setnav(); // adds boxshadow to navbar on scroll
    });


    //init tooltips
    $('[data-toggle="tooltip"]').tooltip();

    //init datepicker
    $('.datepicker').datepicker({
        dateFormat:"dd-mm-yy"
    });


    // scroll to top
    $(window).scroll(function(){
        if ($(this).scrollTop()>100) {
            $('#topbtn').fadeIn();
        }
        else {
            $('#topbtn').fadeOut();
        }
      });
      $('#topbtn').click(function(){
          $('html, body').animate({scrollTop : 0}, 1000);
          return false;
      });

    
    // init owl carousel
    $('.hotels').owlCarousel({
        loop:true,
        navText: ['<i class="fa fa-3x fa-angle-left"></i>','<i class="fa fa-3x fa-angle-right"></i>'],
        autoplay:true,
        autoplayTimeout:3000,
        dotsEach:1,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.testimonials').owlCarousel({
        loop:true,
        autoplay:true,
        dotsEach:1,
        items:1
    });

    $('.anchor-scroll').anchorScroll({
        scrollSpeed: 1200,
        offsetTop: 30
    });

});

function setnav(){
    if($(window).scrollTop()>91)
    {
        nav.removeClass('bgsemi');
        nav.addClass('box');
    }
    else {
        nav.removeClass('box');
        nav.addClass('bgsemi');
    }
}