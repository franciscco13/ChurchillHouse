$(function(){
	var menu = $(".menu-top");
	var items = menu.find(".item");



	items.on("click", function(){
		var este = $(this);
		var section = "#section"+este.attr('section'); 

		 $('html,body').animate({
            scrollTop: $(section).offset().top-50
        }, {
            duration: 'slow', 
            easing: 'swing'
        });
	});

	var fab_top = $("#goto-top");
	fab_top.on("click", function(){
 
		$('html,body').animate({
            scrollTop: $("body").offset().top - 100
        }, {
            duration: 'slow', 
            easing: 'swing'
        });
	});

	$(window).scroll(function(){
		if(CheckDiv("section0"))
			$("#goto-top").fadeIn(100);
		else 
			$("#goto-top").fadeOut(100);
	});

	$(window).scroll();

	function CheckDiv(section){
		var scrollW = $(window).scrollTop();
		var scrollS = $("#"+section).scrollTop(); 

		if(scrollW > scrollS) 
			return true;
		else return false;
	}
	
});