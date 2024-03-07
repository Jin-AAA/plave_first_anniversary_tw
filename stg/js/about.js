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

})