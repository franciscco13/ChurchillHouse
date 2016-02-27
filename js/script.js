$(function(){ 

	$('.carousel').carousel();
	$(".button-collapse").sideNav();

	var slides = $('.carousel').find('.item');
	$.each(slides, function(key, value){
		var src = $(this).attr("src");
		$(this).css("background-image", "url("+src+")");
	});
});