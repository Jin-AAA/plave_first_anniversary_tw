$(function(){

    // $(".photo_slide").ticker({

    //     // item selector
    //     item: 'img',
      
    //     // Toggles whether the ticker should pause on mouse hover
    //     pauseOnHover: false,
      
    //     // <a href="https://www.jqueryscript.net/animation/">Animation</a> speed
    //     speed: 30,
      
    //     // Decides whether the ticker breaks when it hits a new item or if the track has reset
    //     pauseAt: '',
      
    //     // delay in milliseconds
    //     //delay: 500
      
    // });

    var elements = $('ul.tithome li').length;

    for(var i=0;i < elements; i++){
     $(".tithome").clone().prependTo( ".scorri" );
    };
    
    var liEle = [];
    var liEle = $(".tithome li");

})