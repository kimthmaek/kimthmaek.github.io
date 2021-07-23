$(function(){
    
$('.main_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed:3000,
    speed: 1500,
    fade: true,
    pauseOnHover:false,
    pauseOnFocus:false,
    cssEase: 'linear'
});
$(".main_slider figure").eq(1).addClass("on");
$(".main_slider").on("afterChange", function(e,s,c){
    $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");
});

$("#visual .xi-angle-left-min").on("click", function(){
    $(".main_slider").slick("slickPrev");
});
$("#visual .xi-angle-right-min").on("click", function(){
    $(".main_slider").slick("slickNext");
});


























});

