$(function(){

$("#main").fullpage({
    anchors:['mk01', 'mkk02', 'm03', 'm04', 'kk05'],
    afterLoad: function(origin, destination, direction){
        //console.log(destination.index);
        $(".section").eq(destination.index) .addClass("on").siblings().removeClass("on");
        $("nav li").eq(destination.index) .addClass("on").siblings().removeClass("on");
        /*if(destination.index===4) {
            $("footer").css({color:"#fff"})
        }
        else{
            $("footer").removeAttr("style"))
        }*/
    },
});




$("#mopen").on("click", function(){
   $(this).toggleClass("on");
   $("#cover_nav").toggleClass("on");
});

$(".m01 .xi-pause").on("click", function(){
    $(".m01_video").trigger("pause");
});

$(".m01 .xi-play").on("click", function(){
    $(".m01_video").trigger("play");
});

$("#cover_nav .link a").on("click", function(){
    $("#cover_nav").removeClass("on");
    $("#mopen").removeClass("on");
});


$(".pf01 .xi-pause").on("click", function(){
    $(".p01_video").trigger("pause");
});

$(".pf01 .xi-play").on("click", function(){
    $(".p01_video").trigger("play");
});

$(".pf02 .xi-pause").on("click", function(){
    $(".p02_video").trigger("pause");
});

$(".pf02 .xi-play").on("click", function(){
    $(".p02_video").trigger("play");
});


$(".pt_slider").slick({
    arrows:false,
    slidesToShow:3,
    dots:true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true 
          }
        }
    ]

});

$(".pf03 i.xi-arrow-left").on("click", function(){
    $(".pt_slider").slick("slickPrev")
});
$(".pf03 i.xi-arrow-right").on("click", function(){
    $(".pt_slider").slick("slickNext")
});



});











