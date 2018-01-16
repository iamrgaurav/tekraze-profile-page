$(function(){
    $("button.rg-navbar-toggler").click(function(){
        $("div#collapsible-rg-navbar").toggle();     
    });


    $(window).scroll(function () {
    if( $(window).scrollTop() > $('.rg-navbar-wrapper').offset().top && !($('.rg-navbar-wrapper').hasClass('header-fixed'))){
      $('.rg-navbar-wrapper').addClass('header-fixed');
    } else if ($(window).scrollTop() == 0){
      $('.rg-navbar-wrapper').removeClass('header-fixed');
    }
});
    $(".rg-nav-item > a").click(function(){
            $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
    });
});
