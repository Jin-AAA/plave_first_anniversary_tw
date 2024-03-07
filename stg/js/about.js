$(function(){

    var elements = $('ul.tithome li').length;

    for(var i=0;i < elements; i++){
     $(".tithome").clone().prependTo( ".scorri" );
    };
    
    var liEle = [];
    var liEle = $(".tithome li");

})