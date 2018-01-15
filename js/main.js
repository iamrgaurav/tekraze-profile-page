$(function(){
    $("button.rg-navbar-toggler").click(function(){
        $("div#collapsible-rg-navbar").toggle();     
    });

});
    $(window).scroll(function () {
    if( $(window).scrollTop() > $('.header').offset().top && !($('.header').hasClass('.header-fixed'))){
      $('.header').addClass('.header-fixed');
    } else if ($(window).scrollTop() == 0){
      $('.header').removeClass('.header-fixed');
    }
});
