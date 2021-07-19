$(function(){

        //(https://github.com/alvarotrigo/fullpage.js)
    $("#Wrap").fullpage({
        navigation: true,
        afterLoad: function(origin, destination, direction){
            $(".section").eq(destination.index) .addClass("on").siblings().removeClass("on");
        },
    });

















});