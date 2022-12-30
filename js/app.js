$(document).ready(function(){

    AOS.init({
        
        once: true,
        disable: 'mobile'

    });

    $(".upward").click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });
    
});
