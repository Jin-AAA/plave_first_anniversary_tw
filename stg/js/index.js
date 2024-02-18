$(function(){

    var elements = $('ul.tithome li').length;

    for(var i=0;i < elements; i++){
     $(".tithome").clone().prependTo( ".scorri" );
    };
    
    var liEle = [];
    var liEle = $(".tithome li");

    gsap.to(".slogan", {duration:2, autoAlpha:1, scale:1, ease: Power1.easeOut});
    gsap.to(".cont", {duration:2, autoAlpha:1, ease: Power1.easeOut, delay:1});
    gsap.to(".subti", {duration:2, autoAlpha:1, ease: Power1.easeOut, delay:1.5});
    gsap.to(".nav", {duration:2, autoAlpha:1, ease: Power1.easeOut, delay:2});

})