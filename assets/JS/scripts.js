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

    $('.nextBtn').click(function(){
		var currentImg = $('.active');
		var nextImg = currentImg.next();
		
		if(nextImg.length){
			currentImg.removeClass('active').css('z-index', -10);
			nextImg.addClass('active').css('z-index', 10);
		}
	});
	
	$('.prevBtn').click(function(){
		var currentImg = $('.active');
		var prevImg = currentImg.prev();
		
		if(prevImg.length){
			currentImg.removeClass('active').css('z-index', -10);
			prevImg.addClass('active').css('z-index', 10);
		}
	});
});
