$(function(){

    $( "#tabs" ).tabs();

    $('.yejun_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.yejun_nav'
      });
      $('.yejun_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.yejun_main',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });

})