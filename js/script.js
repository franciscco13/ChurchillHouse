$(function(){ 

	$(".button-collapse").sideNav();
	$('.parallax').parallax();

	/** Redireccionar al index si se da clic en logo  **/
	$(".nav-wrapper .logo").on("click", function(){ 
		window.location.href = "./index.html";
	});
});