$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
            $(".header").addClass("sticky");
        else
            $(".header").removeClass("sticky");
    });

    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".header__menu").toggleClass("active");
    });
});
