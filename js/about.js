$(function(){

    var elements = $('ul.tithome li').length;

    for(var i=0;i < elements; i++){
     $(".tithome").clone().prependTo( ".scorri" );
    };
    
    var liEle = [];
    var liEle = $(".tithome li");

    var elements_b = $('ul.tithome_b li').length;

    for(var i=0;i < elements_b; i++){
     $(".tithome_b").clone().prependTo( ".scorri_b" );
    };
    
    var liEle_b = [];
    var liEle_b = $(".tithome_b li");

    // var elements_c = $('ul.tithome_c li').length;

    // for(var i=0;i < elements_c; i++){
    //  $(".tithome_c").clone().prependTo( ".scorri_c" );
    // };
    
    // var liEle_c = [];
    // var liEle_c = $(".tithome_c li");

    // var elements_d = $('ul.tithome_d li').length;

    // for(var i=0;i < elements_d; i++){
    //  $(".tithome_d").clone().prependTo( ".scorri_d" );
    // };
    
    // var liEle_d = [];
    // var liEle_d = $(".tithome_d li");

})