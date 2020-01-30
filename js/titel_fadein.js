jQuery(document).ready(function($){
    setTimeout(function(){
        $(".titel").fadeIn(500);
        $('.trans--grow').addClass('grow');
        $(".untertitel").delay(1000).fadeIn(2000);
    }, 400);
});

